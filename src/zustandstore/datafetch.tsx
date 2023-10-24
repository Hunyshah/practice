import { create } from "zustand";

const Api = "https://jsonplaceholder.typicode.com/users";
type ItemsType = {
  id?: number;
  name: string;
  price?: number;
};

type FetchStore = {
  items: ItemsType[] | [];
  getdata: (data: ItemsType[]) => void;
  fetchdata: () => Promise<void>;
};

export const useDataFetchStore = create<FetchStore>()((set) => ({
  items: [],
  getdata: (data) => set((state) => ({ items: [...state.items, ...data] })),
  fetchdata: async () => {
    const responce = await fetch(Api);
    set({ items: await responce.json() });
  },
}));
