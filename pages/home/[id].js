import router from 'next/router'

export default function Home(props) {
    if(!props.status)
        router.push('/home/1')

    return (
        <div>

        </div>
    )
}



export async function getServerSideProps(context) {
    const number = context.params.id
    const url = `https://api.github.com/repos/tnfsa/EC_database/contents/posts`
    const res = await fetch(url)
    const response = await res.json()

    posts = []
    for (var i = (number - 1) * 10; i < min(length(response), number * 10); ++i) {
        posts.append(number[i])
    }

    return {
        props: {
            response,
            number,
            status = number <= 0 ? false : true
        },
    }
}
