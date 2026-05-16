import { Flex } from "antd";
import IMiningDevice from "../../../../interfaces/IMiningDevice";
import Wallet from "../../Wallets/Wallet";

export default ({ }: IMiningDevice) =>
    <>
        {/* <Flex vertical className="w-full h-full border-solid0">
            <Flex > */}

        <DeviceInfo />
        {/* </Flex>
            <Flex flex={10} className="overflow-scroll" vertical> */}
        <Wallet />
        {/* </Flex>
        </Flex> */}
    </>



import DeviceInfo from "./DeviceInfo";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

// const App: React.FC = () => (
//     <>
//         <Divider titlePlacement="start">Default Size</Divider>
//         <Collapse
//             items={[{ key: '1', label: 'This is default size panel header', children: <p>{text}</p> }]}
//         />
//         <Divider titlePlacement="start">Small Size</Divider>
//         <Collapse
//             size="small"
//             items={[{ key: '1', label: 'This is small size panel header', children: <p>{text}</p> }]}
//         />
//         <Divider titlePlacement="start">Large Size</Divider>
//         <Collapse
//             size="large"
//             items={[{ key: '1', label: 'This is large size panel header', children: <p>{text}</p> }]}
//         />
//     </>
// );

// export default App;


{/*
    Created:2025-10-30T12:24:55.000Z
    Device:ROSE8
    Model:STX-Miner-Pro
    Firmware:
    IMEI:230061000000008
    */}