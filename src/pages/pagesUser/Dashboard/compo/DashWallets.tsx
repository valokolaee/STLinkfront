import { Flex } from "antd"
import useIsMobile from "../../../../hooks/useIsMobile"
import Wallets from "../../components/wallets"
import className from "./Dash_className"
import NavTo from "./NavTo"
import { customerMainRoutes } from "../../../../protectedRouts/config/customerRoutes"
import { customer_wallets } from "../../../../protectedRouts/config/customerRoutes/objects"

export default () => {

    const _isMobile = useIsMobile()



    return (

        <Flex flex={_isMobile ? undefined : 3} className={className} vertical>
            Wallets
            <Wallets flashMode />
            <NavTo to={ `${customerMainRoutes}${customer_wallets}`} />

        </Flex>

    )


}

