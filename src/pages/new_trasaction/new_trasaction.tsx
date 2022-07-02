import { SubmitHandler, useForm } from "react-hook-form";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("description")} />
        <input type="number" {...register("value")} />
        <input type="date" {...register("date")} />
        <select {...register("account")}>
          <option value="1">Nubank</option>
          <option value="2">Inter</option>
        </select>
        <input type="text" {...register("category")} />
        <button>Salvar</button>
      </form>
    </div>
  );
};
