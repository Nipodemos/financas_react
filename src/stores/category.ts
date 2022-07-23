import create from "zustand";
import { persist } from "zustand/middleware";
type CategoryType = {
  name: string;
  id: number;
};

interface CategoryStore {
  categories: CategoryType[];
  addCategory: (name: string) => void;
  removeCategory: (id: number) => void;
}
export const useCategoryStore = create(
  persist<CategoryStore>(
    (set) => ({
      categories: Array<CategoryType>(),
      addCategory: (name: string) => {
        set((state) => ({
          categories: [
            ...state.categories,
            { name, id: state.categories.length },
          ],
        }));
      },
      removeCategory: (id: number) => {
        set((state) => ({
          categories: state.categories.filter((category) => category.id !== id),
        }));
      },
    }),
    { name: "financas-categories" }
  )
);
