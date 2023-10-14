import { IUser } from "./IUser";

export default interface IStore {
  //state properties
  user: IUser | null;

  //state reducers/handlers
  setUser: (user: IUser) => void;
}
