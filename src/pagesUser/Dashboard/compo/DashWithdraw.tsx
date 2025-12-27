import { Flex } from "antd"
import useIsMobile from "../../../hooks/useIsMobile"
import Withdraw from "../../withdraw"
import className from "./Dash_className"
import NavTo from "./NavTo"

export default () => {

    const _isMobile = useIsMobile()

    return (
        <Flex flex={_isMobile ? undefined : 3} className={className} vertical>
            Recent Withdraw
            <Withdraw flashMode />
            <NavTo to="/withdraw" />
        </Flex>
    )


}



