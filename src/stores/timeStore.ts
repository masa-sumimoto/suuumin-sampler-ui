import { create } from "zustand";

type TimeState = {
  measure: number;
  changeMeasure: (v: number) => void;
};

export const useTimeStore = create<TimeState>((set, get) => ({
  measure: 1,
  changeMeasure: (v) => set({ measure: v }),
}));
