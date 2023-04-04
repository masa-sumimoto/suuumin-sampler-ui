import { create } from "zustand";

type State = {
  bankId: string;
};

type Action = {
  change: (v: string) => void;
};

export const useBankStore = create<State & Action>()((set, get) => ({
  bankId: "a",
  change: (v) => set({ bankId: v }),
}));
