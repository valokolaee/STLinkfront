export default interface IPermission {
  id: number;
  name: string;
  description: string | null;
  module: string;
  action: string;
  softDeleted: boolean;
  createdAt: Date;
}