import IDevice from "../../../intrfaceces/IDevice";
import IResponse from "./IResponse";

export default interface IReqRes<Q > {
    getAll: TReqRes<Partial<Q>, IResponse<Q[]>>;
    getOne: TReqRes<number, IResponse<Q>>;
    create: TReqRes<Q, IResponse<Q>>;
    update: TReqRes<Partial<Q>, IResponse<Q>>;
    delete: TReqRes<number, never>;

}



export interface TReqRes<Q, S> {
    req: Q;
    res: S
}



