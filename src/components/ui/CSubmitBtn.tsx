import { Flex } from "antd";
import CButton, { classNameBtn, IButton } from "./CButton";
import { cardAndSelected } from "../../css/classNames";

export default ({ className }: IButton) =>
    <Flex justify="center">
        <button
            className={` w-2/3   ${classNameBtn} ${cardAndSelected(true)} ${className}`}>
            Submit
        </button>
    </Flex>