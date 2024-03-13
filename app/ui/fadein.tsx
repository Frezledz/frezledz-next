'use client'
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
interface Props {
    children: ReactNode
    // any props that come into the component
}

export default function Fadein({children}:Props){
    const [view, inView] = useInView({
        rootMargin:"-50px",
        triggerOnce:true
    })
    return(
        <div ref={view} className={`${inView?"opacity-100":"opacity-0 -translate-y-3"} duration-300`}>{children}</div>
    )

}