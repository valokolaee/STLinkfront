import IDevice from '../../../intrfaceces/IDevice';
import IDeviceEarning from '../../../intrfaceces/IDeviceEarning';
import IUser from '../../../intrfaceces/IUser';
import { IBank, IPool } from '../../../intrfaceces/types';
import { ModelApi } from '../ModelApi';
import ApiObjectGenerator, {  IApiObject } from './ApiObjectGenerator';
import IDeviceReqRes from './IDeviceApi';
import ILoginReq from './ILogin';
import IRegisterReq from './IRegister';
import IReqRes from './IReqRes';
import IResponse from './IResponse';






export const devices = ApiObjectGenerator<IDevice>('devices')
export const earnings = ApiObjectGenerator<IDeviceEarning>('device-earnings')






export default {

  auth: {
    folderUrl: 'auth',
    login(body: ILoginReq) { return mdlr({ axiosType: 'post', apiUrl: 'login', folderUrl: 'auth', body }) },


    register(body: IRegisterReq) { return mdlr({ axiosType: 'post', apiUrl: 'register', folderUrl: 'auth', body }) },
    getMe: mdlr({ axiosType: 'get', apiUrl: 'me', folderUrl: 'auth', }),
    mail: mdlr({ axiosType: 'get', apiUrl: 'mail', folderUrl: 'auth', }),
  },

  users: {
    folderUrl: 'users',
    stats: mdlr({ axiosType: 'get', folderUrl: 'users', }),
    user(body: { userId: number; }) { return mdlr({ axiosType: 'get', body, folderUrl: this.folderUrl }) },
    investments: mdlr({ axiosType: 'get', apiUrl: 'investments', folderUrl: 'users', }),
    bank_affiliations: mdlr({ axiosType: 'get', apiUrl: 'bank-affiliations', folderUrl: 'users', }),
    referrals: mdlr({ axiosType: 'get', apiUrl: 'referrals', folderUrl: 'users', }),
    loans: mdlr({ axiosType: 'get', apiUrl: 'loans', folderUrl: 'users', }),
    profile(body: IUser) { return mdlr({ axiosType: 'put', apiUrl: 'profile', folderUrl: this.folderUrl, body }) },
    updateAvatar(body: any) { return mdlr({ axiosType: 'put', apiUrl: 'avatar', folderUrl: 'users', body }) },
    updateLogo(body: any) { return mdlr({ axiosType: 'put', apiUrl: 'logo', folderUrl: 'users', body }) },
  },



  devices: {
 
  },
  earnings: {
    folderUrl: 'earnings',

    getAll() { return mdlr({ axiosType: 'get', folderUrl: this.folderUrl, }) },

    create(body: any) { return mdlr({ axiosType: 'post', folderUrl: this.folderUrl, body }) },
    delete(body: { deviceId: number; }) { return mdlr({ axiosType: 'delete', apiUrl: '', folderUrl: this.folderUrl, body }) },
    update(body: { deviceId: number; name?: string; serial?: string; }) { return mdlr({ axiosType: 'put', apiUrl: '', folderUrl: this.folderUrl, body }) },
    getOne(body: { deviceId: number; }) { return mdlr({ axiosType: 'get', apiUrl: '', folderUrl: this.folderUrl, body }) },

  },




};




export function mdlr<T = any>(model: ModelApi<T>) {
  return model;
}
