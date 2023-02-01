import { Permission } from "../enumeration/permission";

export type TAuthorities = Permission 
export interface INewUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  login: string;
  password: string;
  idCard: string;
  authorities: TAuthorities[];
}

export interface IUser extends INewUser {
  id: string;
  createdDate?: string;
}
