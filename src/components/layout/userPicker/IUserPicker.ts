import { Input, InputProps, InputRef } from "antd";
import React, { useRef } from "react";
import CModal from "../../ui/CModal";
import { IModalActions } from "../../ui/CModal/IModal";
import AllUsers from "../../../pages/pagesAdmin/UsersManagement/AllUsers";
import { ISelect } from "../../../interfaces/ISelect";
import IUser from "../../../interfaces/IUser";

export interface IUserPicker extends InputProps {
    sel?:ISelect<IUser>
}
