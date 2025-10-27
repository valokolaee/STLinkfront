import { Card, Flex } from "antd";
import IUserWallet from "../../../interfaces/IUserWallet";
import { useEffect, useState } from "react";
import { CancelOutlined, EditNoteOutlined } from "@mui/icons-material";
import Create, { ICreateWallet } from "./create";

export default ({ uw, onSucceed }: ICreateWallet) => {
    const { walletAddress, currency, nickname, pendingBalance, availableBalance, totalEarnings, } = uw || {}
    const [_editMode, _set_editMode] = useState<boolean>(false);


    const _toggleEditModeOn = () => {
        _set_editMode(true);
    }

    const _toggleEditModeOff = () => {
        _set_editMode(false);
    }
    useEffect(() => {
        _set_editMode(false)
    }, [uw])

    return <Card
        title={
            <Flex justify="space-between">
                {walletAddress}
                <div className={"bg-indigo-500 rounded-full text-white px-2"}>
                    {currency}
                </div>
            </Flex>
        }
        variant="borderless"
        className="m-2"  >


        <Flex>

            <div className="w-full">

                <span >Nickname: <strong> {nickname}</strong></span>
            </div>


            {!_editMode ? <EditNoteOutlined className="text-green-700" onClick={_toggleEditModeOn} />
                :
                <CancelOutlined className="text-red-900" onClick={_toggleEditModeOff} />}
        </Flex>


        {_editMode && <Create uw={uw} onSucceed={onSucceed} />}
        <Flex vertical>
            <span>Total Earnings: <strong> {totalEarnings}</strong></span>
            <span>Available Balance: <strong> {availableBalance}</strong></span>
            <span>Pending Balance: <strong> {pendingBalance}</strong></span>
        </Flex>

    </Card>
}