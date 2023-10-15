import { create } from "zustand";

type CounterType = {
  count: number;
  addnumber: () => void;
};
const UseCounter = create<CounterType>()((set) => ({
  count: 0,
  addnumber: () => set((state) => ({ count: state.count + 3 })),
}));

export { UseCounter };
