import { useEffect, useRef } from "react";
import CButton from "../../../../../../components/ui/CButton";
import CModal from "../../../../../../components/ui/CModal";
import IMiningWallet from "../../../../../../interfaces/IMiningWallet";
import { IModalActions } from "../../../../../../components/ui/CModal/IModal";
import Form from "./Form";
import { cardAndSelected } from "../../../../../../css/classNames";
import Create from "../../../../withdraw/create";
import CBottomDrawer from "../../../../../../components/ui/CBottomDrawer";
import SvgWrapper from "../../../../../../components/ui/SvgWrapper";
import AddNewSvg from "../../../../../../assets/icons/AddNewSvg";

export default ({ }: IMiningWallet) => {
    const refModal = useRef<IModalActions>(null)
    // by user name  
    // by wallet address
    //



    const _show = () => refModal.current?.show()
    const _hide = () => refModal.current?.hide()

    useEffect(() => {
        // _show();
    }, [])



    return <CBottomDrawer
        btn={<CButton title={'Withdraw'} onClick={_show} />}
    >
        <Create />
    </CBottomDrawer>
}        
