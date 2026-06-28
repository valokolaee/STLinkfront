import { Avatar } from 'antd';
import { cardAndSelected } from '../../../../css/classNames';
import IUser from '../../../../interfaces/IUser';
import IAllUsers from './IAllUsers';

export default ({ id, username, email, profileImageUrl, isPicker, sel }: IAllUsersItem) =>
    <div
        onClick={() =>
            // console.log('yes')

            isPicker ? sel?.onSelect!({ id, username, email }) : undefined
        }
        className={` ${cardAndSelected(false)} p-5 flex flex-row  mb-2 `}>
        <div className=' w-2/12 '>
            <Avatar src={profileImageUrl} />
        </div>
        <div className="w-4/12 ms-5">
            username: {username}
        </div>
        <div className="w-6/12 ">
            email: {email}
        </div>
    </div>

export interface IAllUsersItem extends IUser, IAllUsers {

}