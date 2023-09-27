import React from 'react'
import { useState,useEffect } from 'react'
import Axios from '../axios/Axios'

const Home = () => {
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [show, setShow] = useState(false)

    const shorten=async()=>{

        await Axios.post('/test',{longUrl:url}).then((res)=>{
            setShortUrl(res.data.shortenurl)
            setShow(true)
        }).catch((err)=>{
            console.log(err)
        })

    }

  return (
    <>
    <input type="text" placeholder="Enter URL" value={url} onChange={(e)=>setUrl(e.target.value)}  />
    <button onClick={shorten}>Shorten</button>
    {show && <h1>{shortUrl}</h1>}
    </>
  )
}

export default Home