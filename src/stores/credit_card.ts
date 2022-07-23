import create from "zustand";
import { persist } from "zustand/middleware";
type CreditCardType = {
  name: string;
  id: number;
};

interface CreditCardStore {
  creditCards: CreditCardType[];
  addCreditCard: (name: string) => void;
  removeCreditCard: (id: number) => void;
}
export const useCreditCardStore = create(
  persist<CreditCardStore>(
    (set) => ({
      creditCards: Array<CreditCardType>(),
      addCreditCard: (name: string) => {
        set((state) => ({
          creditCards: [
            ...state.creditCards,
            { name, id: state.creditCards.length },
          ],
        }));
      },
      removeCreditCard: (id: number) => {
        set((state) => ({
          creditCards: state.creditCards.filter(
            (creditCard) => creditCard.id !== id
          ),
        }));
      },
    }),
    { name: "financas-creditCards" }
  )
);
