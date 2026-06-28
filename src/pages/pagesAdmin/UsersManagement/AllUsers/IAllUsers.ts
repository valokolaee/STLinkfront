import { ISelect } from "../../../../interfaces/ISelect";
import IUser from "../../../../interfaces/IUser";

export default interface IAllUsers {
    isPicker?: boolean;
    sel?:ISelect<IUser>

}