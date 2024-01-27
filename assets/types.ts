import { ReactElement } from "react";
import { IconType } from "react-icons";

export  interface LinkItemProps{
    title:string;
    path:string;
    icon:React.ReactNode
}



export interface User{
    name:string;
    serial:number;
    active:string;
}


