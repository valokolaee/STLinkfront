import { Flex } from "antd"
import useIsMobile from "../../hooks/useIsMobile"
import Desktop from "./compo/desktop"
import Mobile from "./compo/mobile"
import { useEffect, useRef, useState } from "react"
import WebService, { config, IWebServiceFuncs } from "../../webService"
import { useAppSelector } from "../../redux/hooks"
import IMiningSession from "../../interfaces/IMiningSession"
import IReqRes from "../../webService/ApiUrls/apis/IReqRes"
import IMiningWallet from "../../interfaces/IMiningWallet"
import apis from "../../webService/ApiUrls/apis"
import axios from "axios"
var _inter =
    setInterval(async () => { }, 1000)
export default () => {

    const _isMobile = useIsMobile()

    const refWebService = useRef<IWebServiceFuncs>()
    const _savedUser = useAppSelector((s) => s.userSlice)
    // const [_session, set_session] = useState<IMiningSession | undefined>(undefined)
    // const [_data, set_data] = useState<IR1>({ currency: '', totalEarning: 0 })

    // useEffect(() => {
    //     _createEarning()
    // }, [_session])


    const url = 'https://localhost:3002/api/mining-devicesReport/report-earning'

    const _createEarning = async (_session: IMiningSession) => {


        _inter = setInterval(async () => {

            const bodyFormData = {
                imei: '230061000000008',
                amount: Math.random(),//Joi.number().positive().required(),
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



    // useEffect(() => {
    //     if (_session) {
    //         _newSession()
    //     }
    // }, [])



    const _newSession = async () => {
        _clearInterval()
        const res = await refWebService.current?.callApi<IReqRes<IMiningSession>['create']['res']>(apis.miningSession.create({ deviceId: 1, }))

        if (res?.success) {

            _createEarning(res.data!)
        }
    }

    const _clearInterval = () => {
        clearInterval(_inter)
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
            {_isMobile ? <Mobile /> : <Desktop />}
            <WebService ref={refWebService} />

        </Flex>
    )
}