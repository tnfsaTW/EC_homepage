import React from "react";
import Link from 'next/link'

export default function Intro() {
    return (
        <React.Fragment>
            <div id="intro">
                <h1>臺南一中<br />
                    選舉委員會</h1>
                <ul className="actions">
                    <li><a href="#" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
                </ul>
            </div>
            <div id="nav">
                <ul className="links">
                    <li><Link href="/">公告事項</Link></li>
                    <li><Link href="/motivation">動機</Link></li>
                    <li><Link href="/experience">經歷</Link></li>
                    <li><Link href="/policy">政見</Link></li>
                    <li><Link href="/debate">辯論會</Link></li>
                    <li><Link href="/opening">開票</Link></li>
                    <li><Link href="/privacy">隱私權聲明</Link></li>
                </ul>
                <ul className="icons">
                    <li><a href="https://www.facebook.com/tnfshsa" className="icon brands fa-facebook-f" target="_blank"rel="noreferrer" ><span
                        className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/tnfshsa/" className="icon brands fa-instagram" target="_blank" rel="noreferrer"><span
                        className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/tnfsacec" className="icon brands fa-github" target="_blank" rel="noreferrer"><span
                        className="label">GitHub</span></a></li>
                </ul>
            </div>
        </React.Fragment>
    )
}