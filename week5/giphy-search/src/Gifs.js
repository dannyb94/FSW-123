import React from 'react';
import { useState, useEffect } from 'react';


export default function Gifs(){    //{freshQuery}

    const API = '1bq3CdCljF3eDaU43tam3GQUa3dfYq79';
    //const enQuery = encodeURIComponent(query);   //  =${enQuery}
    const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API}`

    const [gifs, setGifs] = useState({}); //his search
    const [img, setImg] = useState([]) //his news
    const [flag, setFlag] = useState(false); //his flag
//--------------------------------------------------------------------------
    useEffect(() => {
        const getData = () => {
            fetch(URL)
                .then((res) => res.json())
                .then((data) => setGifs(data.data))
                .catch((err) => console.log(err))
        }

        console.log('useEffect triggered')

        getData();
    }, [])/**/
//--------------------------------------------------------------------------
    console.log('component is rendered', gifs)

    const getImg = () => {
        fetch(`${URL}`)//=${enQuery}
                .then((res) => res.json())
                .then((data) => setImg(data.data.images.downsized))
                .catch((err) => console.log(err))
    }
//--------------------------------------------------------------------------
    const handleClick = () => {
        getImg();
    }

    const handleChange = (e) => {
        setGifs(e.target.value)
    }

    // const forceRender = () => {
    //     setFlag(true)
    // }

    //const imgTime = (query, freshQuery) => {}

    return (
        <>
            <h3>A Gif Out Of Water!</h3>
            <p>Search millions of gifs for one that speaks to you.</p>
            <form>
                <input type='text'  value={gifs.value}  onChange={handleChange}></input>
                <div value={img}></div>
                <button onClick ={handleClick}>Discovery Awaits!</button>
            </form>
            <p>Title: {gifs.title}</p>
        </>
    )/**/
}

