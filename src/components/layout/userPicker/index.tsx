import { Input, InputProps, InputRef } from "antd";
import React, { useRef } from "react";
import CModal from "../../ui/CModal";
import { IModalActions } from "../../ui/CModal/IModal";
import AllUsers from "../../../pages/pagesAdmin/UsersManagement/AllUsers";
import { IUserPicker } from "./IUserPicker";



export default React.forwardRef<InputRef, IUserPicker>((props, ref) => {
    const { value, onChange, sel, ...rest } = props;
    const refModalDevice = useRef<IModalActions>(null)


    const _show = () => { refModalDevice.current?.show() }

    return (
        <>
            <Input
                ref={ref}
                value={sel?.selectedItem?.email}
                onChange={onChange}
                readOnly
                onClick={_show}
                {...rest}
                className="cursor-pointer"
            />
            <CModal ref={refModalDevice} >
                <AllUsers isPicker sel={sel} />
            </CModal>
        </>
    );
});

// export default MyInput;