import { ReactNode } from "react";

export default interface IModal {
    mat?: boolean;
   btn?: ReactNode;

   className?: string;
    children?: any;
    title?: string;
    open?: boolean;
    onClose?: () => void
    // funcs?:   {
    //     show: () => void;
    //     hide: () => void;
    // } 
}