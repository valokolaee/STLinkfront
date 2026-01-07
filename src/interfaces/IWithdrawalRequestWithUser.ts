import IUser from "./IUser";
import IWithdrawalRequest from "./IWithdrawalRequest";

export default interface IWithdrawalRequestWithUser extends IWithdrawalRequest {
  user?: IUser;
}