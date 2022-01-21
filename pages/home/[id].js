import router from 'next/router'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Link from "next/link"
import React, {useEffect, useState} from "react";


export default function Home(props) {
    if (!props.status)
        router.push('/home/1')
    console.log(props.response)
    return (
        <div>
            <Header/>
            <Navbar page={"home"}/>

            <div className={"px-10"}>
                <div className={"bg-zinc-200 flex-col justify-center py-5 space-y-5"}>
                    {props.response.map((item) => (
                        <Card item={item} key={item.name}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

function Card(props) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function download() {
            const res = await fetch(props.item.download_url)
            const response = await res.json()
            setData(response)
        }
        download().then(() => {
            setLoading(false)
        })
    }, [props.item.download_url])

    return (
        <React.Fragment>
            <div hidden={!loading}>
                <div className={"rounded flex bg-white w-4/5 mx-auto p-2"}>
                    <div className="animate-pulse flex space-x-4 p-5">
                        <div className="h-2 w-40 bg-slate-200 rounded"/>
                    </div>
                </div>
            </div>
            <div hidden={loading}>
                <div className={"rounded flex bg-white w-4/5 mx-auto p-2"}>
                    <div className={"w-1/3"}>
                        <div className={"text-center"}>{data.title}</div>
                    </div>
                    <div className={"w-2/3"}>
                        <div className={"text-gray-400"}>{data.date}</div>
                        <div>{data.context}</div>
                        <div className={"w-full flex justify-end px-3"}>
                            <div className={"px-2 w-20 rounded-lg bg-red-200 text-center"}>
                                <Link href={`/post/${props.item.name.split(".")[0]}`}><a>點擊查看</a></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
}

function min(a, b) {
    if (a > b)
        return b;
    return a;
}

export async function getServerSideProps(context) {
    const number = context.params.id
    const url = `https://api.github.com/repos/tnfsa/EC_database/contents/posts`
    const res = await fetch(url)
    const response = await res.json()

    let posts = []
    for (let i = (number - 1) * 10; i < min(response.length, number * 10); ++i) {
        posts.push(response[i])
    }
    const status = number > 0
    console.log(posts)
    return {
        props: {
            response:posts,
            number,
            status,
        },
    }
}
