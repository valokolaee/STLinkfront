import { useEffect, useState } from "react";

var getIsMobile = (w?: number) => {
    if (w! > 0) {
        return window.innerWidth <= w!
    } else {
        return window.innerWidth <= 750;

    }
}


export default function useIsMobile(w?: number) {



    const [isMobile, setIsMobile] = useState(getIsMobile(w));

    useEffect(() => {
        const onResize = () => {
            setIsMobile(getIsMobile(w));
        }

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    return isMobile;
}