import { Link, Links, To } from "react-router-dom";
import CLink, { ILink } from "./CLink";
import { ReactElement, ReactNode } from "react";

export default ({ title, onClick, link ,className}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 bg-primary text-dark font-bold rounded-lg hover:bg-green-400 transition-colors${className}`}
    >
      {link ? <CLink to={link} title={title as string} /> : title}
    </button>
  );
};

export interface IButton {
  title?: ReactElement|string;
  onClick?: TOnClick;
  link?: To;
  className?: string | undefined;

}