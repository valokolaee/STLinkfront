import { Form, FormProps, Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
import WebService, { IWebServiceFuncs } from "../../../webService";
import IMiningDevice from '../../../interfaces/IMiningDevice';
import IDeviceReqRes from '../../../webService/ApiUrls/apis/IDeviceReqRes';
import IUsersReqRes, { IUsersSearchReqRes } from '../../../webService/ApiUrls/apis/IUsersReqRes';
import { panel } from '../../../webService/ApiUrls/apis';
import IUser from '../../../interfaces/IUser';

export default () => {

    const refWebService = useRef<IWebServiceFuncs>()

    const [searchTerm, set_searchWord] = useState<string>('')
    const [list, set_list] = useState<IUser[]>([])

    const _loadUsers = async () => {
        const res = await refWebService?.current?.callApi<IUsersSearchReqRes['search']['res']>(panel.users.search({ searchTerm, } as IUsersSearchReqRes))
        console.log(res);

        if (res?.success) {
            set_list(res?.data?.data!)
        } else {
        }
    };

    useEffect(() => {
        _loadUsers();
        console.log(list.length);

    }, [searchTerm])


    return (
        <div className="w-full">
            <div className='p-5'>

                <Input
                    value={searchTerm}
                    onChange={(e) => set_searchWord(e.target.value)}
                />
            </div>
            {list.length > 0 && <>
                {list?.map((item, index) => <div>{item.email}   {item.username}</div>)}
            </>}
            <WebService ref={refWebService} />
        </div>
    )
}   