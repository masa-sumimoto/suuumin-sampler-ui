import { create } from "zustand";

type BankState = {
  bankId: string;
  change: (v: string) => void;
};

export const useBankStore = create<BankState>((set, get) => ({
  bankId: "a",
  change: (v) => set({ bankId: v }),
}));
