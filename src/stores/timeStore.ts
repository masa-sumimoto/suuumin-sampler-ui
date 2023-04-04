import { create } from "zustand";

type State = {
  measure: number;
};

type Action = {
  changeMeasure: (v: number) => void;
};

export const useTimeStore = create<State & Action>()((set, get) => ({
  measure: 1,
  changeMeasure: (v) => set({ measure: v }),
}));
