import { create } from "zustand";

interface NavState {
  isNavActive: boolean;
  setIsNavActive: (state: boolean) => void;
}

export const useNavStore = create<NavState>((set) => ({
  isNavActive: false,
  setIsNavActive: (state) => set({ isNavActive: state }),
}));

interface AdultState {
  isAdultActive: boolean;
  setIsAdultActive: (state: boolean) => void;
}

export const useAdultStore = create<AdultState>((set) => ({
  isAdultActive: false,
  setIsAdultActive: (state) => set({ isAdultActive: state }),
}));

interface LogInState {
  isLogIn: boolean;
  setIsLogIn: (state: boolean) => void;
}

export const useLogInStore = create<LogInState>((set) => ({
  isLogIn: false,
  setIsLogIn: (state) => set({ isLogIn: state }),
}));