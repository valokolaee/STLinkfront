import { AxiosResponse } from "axios";

export default (res: AxiosResponse) => {

    const { status, statusText, data, } = res || {}
    // console.log('res',res);

    switch (status) {
        case 200:
        case 201:
            return { success: true, data }
        
        default:
             return { success: false, error: data?.message, }
             
    }
}


