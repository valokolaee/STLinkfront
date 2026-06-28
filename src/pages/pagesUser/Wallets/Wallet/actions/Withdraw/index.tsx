import { useEffect, useRef } from "react";
import CBottomDrawer from "../../../../../../components/ui/CBottomDrawer";
import CButton from "../../../../../../components/ui/CButton";
import { IModalActions } from "../../../../../../components/ui/CModal/IModal";
import IMiningWallet from "../../../../../../interfaces/IMiningWallet";
import Create from "../../../../withdraw/create";

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



    return <CBottomDrawer btn={<CButton title={'Withdraw'} onClick={_show} />}>
        <Create />
    </CBottomDrawer>
}        
