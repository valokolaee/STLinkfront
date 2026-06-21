import { useRef } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import type { FormProps } from 'antd';
import { Checkbox, Flex, Form, Input } from 'antd';
import CButton from '../../../components/ui/CButton';
import CLink from "../../../components/ui/CLink";
import CText from "../../../components/ui/CText";
import IUser from "../../../interfaces/IUser";
import IWithdrawalRequest from "../../../interfaces/IWithdrawalRequest";
import { setUser, setUserAvatar, setUserLogo } from "../../../redux/actions";
import { useAppSelector } from "../../../redux/hooks";
import WebService, { IWebServiceFuncs } from "../../../webService";
import apis, { deviceAlertRequest, deviceSpecificationRequest, miningSession, permission, rolePermissionRequest, roleRequest, userSession } from "../../../webService/ApiUrls/apis";
import ILoginReq, { ILoginRes } from "../../../webService/ApiUrls/apis/ILogin";
import IReqRes from "../../../webService/ApiUrls/apis/IReqRes";
import { formContainer, inputText } from "../../../css/classNames";
import CSubmitBtn from "../../../components/ui/CSubmitBtn";
import { ClassNames } from "@emotion/react";
import { customerMainRoutes } from "../../../protectedRouts/config/customerRoutes";
import { customer_dashboard } from "../../../protectedRouts/config/customerRoutes/objects";

export default (x: ILoginRes, navigate: NavigateFunction) => {
  // const _savedUser = useAppSelector((s) => s.userSlice)
  if (x?.success) {
    var u: IUser = x.data as IUser;
    // if (values.remember) {
    //   u.pass = values.password
    // }

    setUser({ ...u, role: "customer" })

    setUserAvatar(u.profileImageUrl + '?a=' + new Date())

    if (!!!u.logoUrl) {
      setUserLogo('')
    } else {

      setUserLogo(u.logoUrl + '?a=' + new Date())
    }

    navigate(`${customerMainRoutes}${customer_dashboard.path}`)
  }
};

