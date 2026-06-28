import { Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
import IUser from '../../../../interfaces/IUser';
import WebService, { IWebServiceFuncs } from "../../../../webService";
import { panel } from '../../../../webService/ApiUrls/apis';
import { IUsersSearchReqRes } from '../../../../webService/ApiUrls/apis/IUsersReqRes';
import Item from './item';
import IAllUsers from './IAllUsers';

export default ({ sel, isPicker }: IAllUsers) => {

    const refWebService = useRef<IWebServiceFuncs>()

    const [searchTerm, set_searchWord] = useState<string>('')
    const [list, set_list] = useState<IUser[]>([])

    const _loadUsers = async () => {
        const res = await refWebService?.current?.callApi<IUsersSearchReqRes['search']['res']>(panel.users.search({ searchTerm, } as IUsersSearchReqRes['search']['req']))
        console.log(res);

        if (res?.success) {
            set_list(res?.data!)
        } else {
        }
    };

    useEffect(() => {
        _loadUsers();
    }, [searchTerm])


    return (
        <div className="w-full">
            <div className='p-5'>
                <div className='sticky top-0  z-50  mb-5'>
                    <Input
                        value={searchTerm}
                        onChange={(e) => set_searchWord(e.target.value)}
                    />

                </div>
                {list.length > 0 && list?.map((item, index) => <Item key={item.id} {...item} sel={sel} isPicker={isPicker} />)}
            </div>

            <WebService ref={refWebService} />
        </div>
    )
}   