import { create } from "zustand";

type State = {
  measure: number;
  bpm: number;
  minBpm: number;
  maxBpm: number;
  bpmUpSIze: number;
  bpmMoreUpSIze: number;
};

type Action = {
  changeMeasure: (v: number) => void;
  changeBpm: (v: number) => void;
  incrementBpm: () => void;
  decrementBpm: () => void;
  incrementMoreBpm: () => void;
  decrementMoreBpm: () => void;
};

export const useTimeStore = create<State & Action>()((set, get) => ({
  measure: 1,
  bpm: 120,
  minBpm: 40,
  maxBpm: 255,
  bpmUpSIze: 1,
  bpmMoreUpSIze: 10,
  changeMeasure: (v) => set({ measure: v }),
  changeBpm: (v) => set({ bpm: v }),
  incrementBpm: () => {
    const { bpm, maxBpm, bpmUpSIze } = get();
    let newBpm = bpm + bpmUpSIze;
    newBpm = newBpm <= maxBpm ? newBpm : maxBpm;
    set({ bpm: newBpm });
  },
  decrementBpm: () => {
    const { bpm, minBpm, bpmUpSIze } = get();
    let newBpm = bpm - bpmUpSIze;
    newBpm = newBpm >= minBpm ? newBpm : minBpm;
    set({ bpm: newBpm });
  },
  incrementMoreBpm: () => {
    const { bpm, maxBpm, bpmMoreUpSIze } = get();
    let newBpm = bpm + bpmMoreUpSIze;
    newBpm = newBpm <= maxBpm ? newBpm : maxBpm;
    set({ bpm: newBpm });
  },
  decrementMoreBpm: () => {
    const { bpm, minBpm, bpmMoreUpSIze } = get();
    let newBpm = bpm - bpmMoreUpSIze;
    newBpm = newBpm >= minBpm ? newBpm : minBpm;
    set({ bpm: newBpm });
  },
}));
