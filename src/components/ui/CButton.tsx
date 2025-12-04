import { Link, Links, To } from "react-router-dom";
import CLink, { ILink } from "./CLink";
import { ReactElement, ReactNode } from "react";
import { SignalCellular2Bar } from "@mui/icons-material";
import { cardAndSelected } from "../../css/classNames";

export default ({ title, onClick, link, className }: IButton) => {
  return (

    <button
      onClick={onClick}
      className={`w-2/3 border-solid text-center  ${className2} ${cardAndSelected(true)} ${className}`}
    >

      {link ? <CLink to={link} title={title as string} /> : title}
    </button>
  );
};

export interface IButton {
  title?: ReactElement | string;
  onClick?: TOnClick;
  link?: To;
  className?: string | undefined;

}
const
  className2 = "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"