import IUser from "../../../interfaces/IUser";
import IResponse from "./IResponse";

export default interface ILoginAgentReq {
    email: string;
    password: string
}
export interface ILoginAgentRes extends IResponse<IUser> { }