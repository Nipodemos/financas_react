import { SubmitHandler, useForm } from "react-hook-form";
import { useDebitCardsStore } from "../../stores/debit_card";
interface Inputs {
  name: string;
  initialValue: number;
}
export const NewDebitCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const debitCards = useDebitCardsStore((store) => store.debitCards);
  const addDebitCard = useDebitCardsStore((store) => store.addDebitCards);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let cardAlreadyExists = false;
    debitCards.forEach((card) => {
      if (card.name === data.name) {
        cardAlreadyExists = true;
      }
    });

    if (cardAlreadyExists) {
      alert("Cartão de débito já existe");
      return;
    }
    addDebitCard(data.name, data.initialValue);
  };

  return (
    <>
      <h1>Novo cartão de débito</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { minLength: 3, required: true })}
          type="text"
          placeholder="Nome do cartão"
        />
        <div>{errors.name?.message}</div>
        <input
          {...register("initialValue", { valueAsNumber: true })}
          type="number"
          placeholder="Saldo Inicial"
        />
        <div>{errors.initialValue?.message}</div>
        <button type="submit"></button>
      </form>
    </>
  );
};
