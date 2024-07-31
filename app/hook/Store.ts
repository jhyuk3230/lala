import create from "zustand";

interface NavState {
  isNavActive: boolean;
  setIsNavActive: (state: boolean) => void;
}

export const useNavStore = create<NavState>((set) => ({
  isNavActive: false,
  setIsNavActive: (state) => set({ isNavActive: state }),
}));
