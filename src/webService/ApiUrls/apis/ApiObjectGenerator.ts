import IDevice from "../../../interfaces/IDevice";
import { ModelApi } from "../ModelApi";
import IReqRes from "./IReqRes";

export interface IApiObject<T = any> {
    getAll: (body?: IReqRes<T>['getAll']['req']) => ModelApi<IReqRes<T>['getAll']['req']>
    getOneByID: (body: IReqRes<T>['getOneByID']['req']) => ModelApi<IReqRes<T>['getOneByID']['req']>
    getOneByObject: (body: IReqRes<T>['getOneByObject']['req']) => ModelApi<IReqRes<T>['getOneByObject']['req']>
    getAllBy: (body?: IReqRes<T>['getAllBy']['req']) => ModelApi<IReqRes<T>['getAllBy']['req']>
    search: (body?: IReqRes<T>['search']['req']) => ModelApi<IReqRes<T>['search']['req']>

    create: (body: IReqRes<T>['create']['req']) => ModelApi<IReqRes<T>['create']['req']>
    update: (body: IReqRes<T>['update']['req']) => ModelApi<IReqRes<T>['update']['req']>
    delete: (body: IReqRes<T>['delete']['req']) => ModelApi<IReqRes<T>['delete']['req']>
    deletePermanently: (body: IReqRes<T>['delete']['req']) => ModelApi<IReqRes<T>['delete']['req']>


}






export default <T>(folderUrl: string,api?:ModelApi['api']): IApiObject<T> => {
    return {
        getAll(body) { return { folderUrl, body, axiosType: 'get', api} },
        getOneByID(body) { return { folderUrl, axiosType: 'get', apiUrl: body , api} },
        getOneByObject(body) { return { folderUrl, axiosType: 'post', apiUrl: body , api} },
        getAllBy(body) { return { folderUrl, body, axiosType: 'post', apiUrl: 'getAllBy' , api} },
        search(body) { return { folderUrl, body, axiosType: 'post', apiUrl: 'search' , api} },

        create(body) { return { folderUrl, body, axiosType: 'post' , api} },
        update(body) { return { folderUrl, body, axiosType: 'put' , api} },
        delete(body) { return { folderUrl, axiosType: 'delete', apiUrl: body , api} },
        deletePermanently(body) { return { folderUrl, axiosType: 'delete', apiUrl: body , api} },


    }
}
