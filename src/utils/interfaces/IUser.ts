import { Trole } from "../types/TRole";

export interface IUser {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role: Trole;
}
