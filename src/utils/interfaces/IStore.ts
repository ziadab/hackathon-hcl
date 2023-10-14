import { Trole } from "../types/TRole";

export default interface IStore {
  //state properties
  role: Trole | null;

  //state reducers/handlers
  setRole: (role: Trole) => void;
}
