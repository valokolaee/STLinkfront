import IAgent from "./IAgent";
import ICustomer from "./ICustomer";
import IUser from "./IUser";

export default interface ISavedUser extends IUser {
    agent?: IAgent;
    customer?: ICustomer
}