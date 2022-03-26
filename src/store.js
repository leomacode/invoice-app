import data from "./data/data.json";
import create from "zustand";

const useStore = create((set) => ({
  invoices: data,
  searchTerms: [],
  updateSearchTerms: (newTerms) => set(() => ({ searchItems: newTerms })),
}));

export default useStore;
