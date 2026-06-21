import IUser from "../../../interfaces/IUser";
import IReqRes from "./IReqRes";


export default interface IUsersReqRes extends IReqRes<IUser> { }

export interface IUsersSearchReqRes extends IReqRes<IUser> {
    searchTerm?: string;
    userType?: userType[];
}

export type userType = 'customer' | 'agents'

const x: IUsersSearchReqRes['search']['req'] = {
    
}