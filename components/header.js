import Link from "next/link";

export default function Header(){
    return(
        <div className={"h-10 flex items-center bg-neutral-800"}>
            <div className={"space-x-2"}>
                <div/>
                <div className={"items-center bg-blue-100"}>
                    <Link href={"/"}>台南一中選舉委員會</Link>
                </div>
            </div>
        </div>
    )
}