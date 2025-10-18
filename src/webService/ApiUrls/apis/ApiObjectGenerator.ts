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


}






export default <T>(folderUrl: string): IApiObject<T> => {
    return {
        getAll(body) { return { folderUrl, body, axiosType: 'get' } },
        getOneByID(body) { return { folderUrl, axiosType: 'get', apiUrl: body } },
        getOneByObject(body) { return { folderUrl, axiosType: 'post', apiUrl: body } },
        getAllBy(body) { return { folderUrl, body, axiosType: 'post', apiUrl: 'getAllBy' } },
        search(body) { return { folderUrl, body, axiosType: 'post', apiUrl: 'search' } },

        create(body) { return { folderUrl, body, axiosType: 'post' } },
        update(body) { return { folderUrl, body, axiosType: 'put' } },
        delete(body) { return { folderUrl, axiosType: 'delete', apiUrl: body } },


    }
}

// type TExtraActions = { name: string; obj: ModelApi }

// const extraActions = (folderUrl: string, list?: TExtraActions[]) => {
//     var actions: { [key: string]: ModelApi } = {}
//     if (list!?.length > 0) {
//         list!.forEach((e) => { actions[e.name] = { folderUrl, ...e.obj }; })
//     }
//     return actions
// }





// export default <T>(folderUrl: string, list?: TExtraActions[]) => {
//     return {
//         ...mainActions<T>(folderUrl),
//         ...extraActions(folderUrl, list)
//     }
// }