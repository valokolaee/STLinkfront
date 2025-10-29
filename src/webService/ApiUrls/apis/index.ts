import IDevice from '../../../interfaces/IDevice';
import IDeviceAlert from '../../../interfaces/IDeviceAlert';
import IDeviceEarning from '../../../interfaces/IDeviceEarning';
import IDeviceSpecification from '../../../interfaces/IDeviceSpecification';
import IMiningDevice from '../../../interfaces/IMiningDevice';
import IMiningSession from '../../../interfaces/IMiningSession';
import IMiningWallet from '../../../interfaces/IMiningWallet';
import IPermission from '../../../interfaces/IPermission';
import IRole from '../../../interfaces/IRole';
import IRolePermission from '../../../interfaces/IRolePermission';
import IUser from '../../../interfaces/IUser';
import IUserSession from '../../../interfaces/IUserSession';
import IUserWallet from '../../../interfaces/IUserWallet';
import IWithdrawalRequest from '../../../interfaces/IWithdrawalRequest';
import ApiObjectGenerator from './ApiObjectGenerator';
import ILoginReq from './ILogin';
import IRegisterReq from './IRegister';
import mdlr from './ModelApiGenerator';



export const miningDevices = ApiObjectGenerator<IDevice>('mining-devices')
export const deviceEarnings = ApiObjectGenerator<IDeviceEarning>('device-earnings')
export const miningWallet = ApiObjectGenerator<IMiningWallet>('mining-wallet')
export const userWallet = ApiObjectGenerator<IUserWallet>('user-wallet')
export const withdrawalRequest = ApiObjectGenerator<IWithdrawalRequest>('withdrawal-request')

export const deviceAlertRequest = ApiObjectGenerator<IDeviceAlert>('device-alert')
export const deviceSpecificationRequest = ApiObjectGenerator<IDeviceSpecification>('device-specification')
export const miningSession = ApiObjectGenerator<IMiningSession>('mining-session')
export const permission = ApiObjectGenerator<IPermission>('permission')
export const rolePermissionRequest = ApiObjectGenerator<IRolePermission>('role-permission')
export const roleRequest = ApiObjectGenerator<IRole>('role')
export const userSession = ApiObjectGenerator<IUserSession>('user-session')
export const monitor = ApiObjectGenerator<IMiningDevice>('monitor')




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

  miningDevices,
  deviceEarnings,
  miningWallet,
  withdrawalRequest,
  deviceAlertRequest,
  deviceSpecificationRequest,
  miningSession,
  permission,
  rolePermissionRequest,
  roleRequest,
  userSession,
  monitor
};




