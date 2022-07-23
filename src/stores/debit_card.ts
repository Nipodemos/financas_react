import create from "zustand";
import { persist } from "zustand/middleware";
type DebitCardsType = {
  name: string;
  id: number;
  initialValue: number;
};

interface DebitCardsStore {
  debitCards: DebitCardsType[];
  addDebitCards: (name: string, initialValue: number) => void;
  removeDebitCards: (id: number) => void;
}
export const useDebitCardsStore = create(
  persist<DebitCardsStore>(
    (set) => ({
      debitCards: Array<DebitCardsType>(),
      addDebitCards: (name, initialValue) => {
        set((state) => ({
          debitCards: [
            ...state.debitCards,
            { name, initialValue, id: state.debitCards.length },
          ],
        }));
      },
      removeDebitCards: (id: number) => {
        set((state) => ({
          debitCards: state.debitCards.filter(
            (DebitCards) => DebitCards.id !== id
          ),
        }));
      },
    }),
    { name: "financas-DebitCardss" }
  )
);
