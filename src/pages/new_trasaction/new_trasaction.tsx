import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCategoryStore } from "../../stores/category";

interface Props {
  tipo: string;
}
interface Inputs {
  description: string;
  value: number;
  date: Date;
  account: string;
  category: string;
}

const categoriesForExpenses = [
  "Alimentação",
  "Assinaturas e serviços",
  "Bares e restaurantes",
  "Casa",
  "Compras",
  "Cuidados pessoais",
  "Dívidas e empréstimos",
  "Educação",
];

const categoriesForIncome = [
  "Empréstimos",
  "Investimentos",
  "Outras receitas",
  "Renegociação de cartão de crédito",
  "Salário",
];
export const NewTransaction = ({ tipo }: Props) => {
  const categories = useCategoryStore((store) => store.categories);
  const [transactionType, setTransactionType] = useState(tipo);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <h1>Nova Transação</h1>
      <h2>Tipo:</h2>
      <button>Receita</button>
      <button>Despesa</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("description")} />
        <input type="number" {...register("value")} />
        <input type="date" {...register("date")} />
        <select {...register("account")}>
          <option value="1">Nubank</option>
          <option value="2">Inter</option>
        </select>
        <select {...register("category")}>
          {tipo === "expense" &&
            categoriesForExpenses.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
        <input type="text" {...register("category")} />
        <button>Salvar</button>
      </form>
    </div>
  );
};
