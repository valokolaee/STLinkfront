import IRole from "./IRole";

export default interface IAgent {

  id: number;
  userId: number;
  roleId: number;
  createdAt: Date;
  softDeleted: boolean;
  role: IRole;
}