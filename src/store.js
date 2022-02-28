import data from "./data/data.json";
import create from "zustand";

const useStore = create((set) => ({
  invoices: data,
}));

export default useStore;
