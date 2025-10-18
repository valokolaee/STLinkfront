import IUser from "../../../interfaces/IUser";
import ILoginReq from "./ILogin";
import IResponse from "./IResponse";


export default interface IRegisterReq extends ILoginReq {
    username: string;
    clientType: 'individual' | 'financial_entities' | 'business';
}

export interface IRegisterRes extends IResponse<IUser> {

}