import IDevice from "../../../intrfaceces/IDevice";
import { ModelApi } from "../ModelApi";
import IReqRes from "./IReqRes";

export interface IApiObject<T = any> {
    // folderUrl: string,

    getAll: (body?: IReqRes<T>['getAll']['req']) => ModelApi<IReqRes<T>['getAll']['req']>
    getOne: (body: IReqRes<T>['getOne']['req']) => ModelApi<IReqRes<T>['getOne']['req']>

    create: (body: IReqRes<T>['create']['req']) => ModelApi<IReqRes<T>['create']['req']>
    update: (body: IReqRes<T>['update']['req']) => ModelApi<IReqRes<T>['update']['req']>
    delete: (body: IReqRes<T>['delete']['req']) => ModelApi<IReqRes<T>['delete']['req']>


}







export default <T>(folderUrl: string): IApiObject<T> => {
    return {
        getAll(body) { return { folderUrl, body, axiosType: 'get' } },
        getOne(body) { return { folderUrl,  axiosType: 'get', apiUrl:body} },

        create(body) { return { folderUrl, body, axiosType: 'post' } },
        update(body) { return { folderUrl, body, axiosType: 'put' } },
        delete(body) { return { folderUrl, body, axiosType: 'delete' } },


    }
}


