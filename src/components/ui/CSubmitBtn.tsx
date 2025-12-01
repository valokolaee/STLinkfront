import { Flex } from "antd";
import CButton, { IButton } from "./CButton";

export default (p?:IButton) =>
    <Flex justify="center">

        <CButton title='Submit'  {...p} />
    </Flex>