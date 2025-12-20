import { Flex } from "antd"
import useIsMobile from "../../hooks/useIsMobile"
import Desktop from "./compo/desktop"
import Mobile from "./compo/mobile"

export default () => {

    const _isMobile = useIsMobile()

    return (
        <Flex className=" w-full h-full overflow-scroll " vertical={_isMobile}>

            {_isMobile ? <Mobile /> : <Desktop />}

        </Flex>
    )
}