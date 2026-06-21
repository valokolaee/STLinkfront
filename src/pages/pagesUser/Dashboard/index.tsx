import { Flex } from "antd"
import axios from "axios"
import { useEffect, useRef } from "react"
import useIsMobile from "../../../hooks/useIsMobile"
import IMiningSession from "../../../interfaces/IMiningSession"
import { useAppSelector } from "../../../redux/hooks"
import WebService, { config, IWebServiceFuncs } from "../../../webService"
import apis, { pan } from "../../../webService/ApiUrls/apis"
import IReqRes from "../../../webService/ApiUrls/apis/IReqRes"
import Desktop from "./compo/desktop"
import Mobile from "./compo/mobile"
var _inter =
    setInterval(async () => { }, 1000)
export default () => {

    const _isMobile = useIsMobile()

    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    // console.log('_savedUser',_savedUser);

    // const [_session, set_session] = useState<IMiningSession | undefined>(undefined)
    // const [_data, set_data] = useState<IR1>({ currency: '', totalEarning: 0 })

    // useEffect(() => {
    //     _createEarning()
    // }, [_session])


    const url = 'https://localhost:3002/mx/mining-devicesReport/report-earning'

    const _createEarning = async (_session: IMiningSession) => {


        _inter = setInterval(async () => {

            const bodyFormData = {
                imei: '123456789012345678901234567890',
                // amount: Math.random(),//Joi.number().positive().required(),
                currency: 'USDT',//,Joi.string().min(2).max(10).required(),
                ipAddress: '192.0.2.146',//Joi.string().ip({ version: ['ipv4', 'ipv6'] }).optional(),
                timestamp: new Date(),//Joi.date().iso().optional().default(() => new Date()),
                cpuUsage: Math.random() * 100,// Joi.number().min(0).max(100).required(),
                memoryUsage: Math.random() * 100,// Joi.number().min(0).max(100).required(),
                gpuUsage: Math.random() * 100,//Joi.number().min(0).max(100).optional().allow(null),
                processingSpeed: Math.random() * 100,// Joi.number().min(0).required(),
                fanSpeedRpm: Math.floor((Math.random() * 100)),// Joi.number().integer().min(0).required(),
                temperature: Math.random() * 100,// Joi.number().min(0).max(120).required(),
                powerConsumption: Math.random() * 100,//Joi.number().min(0).required(),
                hashRate: Math.random() * 100,//Joi.number().min(0).required(),
                networkLatency: Math.random() * 100,//Joi.number().min(0).optional().allow(null),
            }

            const res = await axios.post(url, bodyFormData, config);



        }, 2000);
    }



    useEffect(() => {
        // _txt()
        // if (_session) {
        // _newSession()
        // }
    }, [])



    const _newSession = async () => {
        _clearInterval()
        const res = await refWebService.current?.callApi<IReqRes<IMiningSession>['create']['res']['data']>(apis.miningSession.create({ deviceId: 1, }))

        if (res?.success) {

            _createEarning(res.data!)
        }
    }

    const _clearInterval = () => {
        clearInterval(_inter)
    }

    const _txt = () => {
        refWebService.current?.callApi(pan.getAll())
    }
    return (
        <Flex className=" w-full h-full overflow-scroll "
            vertical
        // vertical={_isMobile}
        >
            {/* <button onClick={_newSession}>
                go
            </button>
            <button onClick={_clearInterval}>
                stop
            </button> */}
            {/* <OneWallet /> */}


            {/* <Create/> */}
            {/* {process.env.NODE_ENV && <button onClick={_newSession}>hit me</button>} */}
            {_isMobile ? <Mobile /> : <Desktop />}
            <WebService ref={refWebService} />

        </Flex>
    )
}