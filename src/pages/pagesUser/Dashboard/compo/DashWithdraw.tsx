import { Flex } from "antd"
import useIsMobile from "../../../../hooks/useIsMobile"
import Withdraw from "../../withdraw"
import className from "./Dash_className"
import NavTo from "./NavTo"
import { customerMainRoutes } from "../../../../protectedRouts/config/customerRoutes"
import { customer_withdraw } from "../../../../protectedRouts/config/customerRoutes/objects"

export default () => {

    const _isMobile = useIsMobile()

    return (
        <Flex flex={_isMobile ? undefined : 3} className={className} vertical>
            Recent Withdraw
            <Withdraw flashMode />
            <NavTo to={`${customerMainRoutes}${customer_withdraw.path}`} />
        </Flex>
    )


}



