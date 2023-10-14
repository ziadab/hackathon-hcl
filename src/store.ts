import { create } from "zustand";
import IStore from "./utils/interfaces/IStore";
import { TUser } from "./utils/types/TUser";

const useStore = create<IStore>((set) => ({
  user: null,
  setUser: (user: TUser) => set({ user }),
}));

export default useStore;
