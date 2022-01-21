import router from 'next/router'
import {useEffect} from 'react'

export default function Home() {
  
  useEffect(()=>{
    router.push("/home/1")
  },[])

  return (
      <div>
        Redirecting...
      </div>
  )
}
