import { RightCircleTwoTone } from "@ant-design/icons"
import { Flex } from "antd"
import { Link } from "react-router-dom"

export default ({ to }: { to: string }) =>
    <Flex justify="end">
        <Link to={to}>
            <RightCircleTwoTone style={{ fontSize: 30 }} />
        </Link>
    </Flex>