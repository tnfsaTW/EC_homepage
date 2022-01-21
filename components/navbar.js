import Link from "next/link";
import React from "react"
import {useState} from 'react';

export default function NavigationBar(props) {
    const [tray, setTray] = useState(false);

    function openTray() {
        if (tray) {
            setTray(false)
        } else {
            setTray(true)
        }
    }

    return (
        <React.Fragment>
            <div className={"bg-green-100 flex h-10 justify-center space-x-3 items-center"}>

                <Link href={"/home/1"} passHref><a
                    className={props.page === "home" ? "bg-blue-300 rounded-lg px-4 hover:bg-blue-400" : "rounded-lg bg-blue-200 px-4 rounded-lg text-center hover:bg-blue-400"}>主畫面</a></Link>
                <Link href={"/motivation"} passHref><a
                    className={props.page === "motivation" ? "bg-blue-300 rounded-lg px-4 hover:bg-blue-400" : "rounded-lg bg-blue-200 px-4 rounded-lg text-center hover:bg-blue-400"}>參選動機</a></Link>
                <Link href={"/experience"} passHref><a
                    className={props.page === "experience" ? "bg-blue-300 rounded-lg px-4 hover:bg-blue-400" : "rounded-lg bg-blue-200 px-4 rounded-lg text-center hover:bg-blue-400"}>經歷</a></Link>
                <Link href={"/politics"} passHref><a
                    className={props.page === "politics" ? "bg-blue-300 rounded-lg px-4 hover:bg-blue-400" : "rounded-lg bg-blue-200 px-4 rounded-lg text-center hover:bg-blue-400"}>政見</a></Link>

                <div className={tray ? "space-y-2 self-start" : "self-center"}>
                    <a onClick={openTray}
                       className={"rounded-lg bg-blue-200 px-4 rounded-lg text-center hover:bg-blue-400"}
                       href={"#"}>其他</a>
                    <div hidden={!tray} className={"bg-slate-300 h-auto flex-row item-center space-y-1"}>
                        <div className={"text-center"}>
                            <Link href={"/open"}><a>開票</a></Link>
                        </div>
                        <div className={"text-center"}>
                            <Link href={"/privacy"}><a>隱私權聲明</a></Link>
                        </div>
                        <div className={"text-center"}>
                            <Link href={"/administrator"}><a>登入</a></Link>
                        </div>
                    </div>
                </div>

            </div>


        </React.Fragment>
    )
}