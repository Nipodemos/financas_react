import create from "zustand";
type CategoryType = {
  name: string;
  id: number;
};

interface CategoryStore {
  categories: CategoryType[];
  addCategory: (name: string) => void;
  removeCategory: (id: number) => void;
}
export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  addCategory: (name: string) => {
    set((state) => ({
      categories: [...state.categories, { name, id: state.categories.length }],
    }));
  },
  removeCategory: (id: number) => {
    set((state) => ({
      categories: state.categories.filter((category) => category.id !== id),
    }));
  },
}));
