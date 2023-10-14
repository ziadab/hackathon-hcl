import { create } from "zustand";
import IStore from "./utils/interfaces/IStore";
import { Trole } from "./utils/types/TRole";

const useStore = create<IStore>((set) => ({
  role: null,

  setRole: (role: Trole) => set({ role }),
}));

export default useStore;
