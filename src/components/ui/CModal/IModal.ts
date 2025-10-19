import { ReactNode } from "react";

export default interface IModal {
    btn?: ReactNode;
    children?: ReactNode;
    title?: string;
    open?: boolean;
    onClose?: () => void
    
}