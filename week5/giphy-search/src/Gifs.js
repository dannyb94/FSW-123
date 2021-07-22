import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Gifs(){
    const [gifs, setGifs] = useState([]); //search
    const [imgQuery, setImg] = useState('') //gifs
    const API = '1bq3CdCljF3eDaU43tam3GQUa3dfYq79'; //key
//--------------------------------------------------------------------------
    const getData = (type, query) => {
    const URL = `https:\\api.giphy.com/v1/gifs/${type}?api_key=${API}&q=${query}`
    axios.get(`${URL}`)
        .then((res) => {
            if(!res.data.data.length){
                setGifs([ res.data.data])
            } else {
                setGifs(res.data.data)
            }
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        //console.log('useEffect triggered')
        getData('random', 'cat');
    }, [])
//--------------------------------------------------------------------------
    //console.log('component is rendered', gifs)
    const getImg = () => {
        getData( 'search', imgQuery)
    }
//--------------------------------------------------------------------------
    const handleClick = (e) => {
        e.preventDefault()
        getImg();
    }

    const handleChange = (e) => {
        setImg(e.target.value)
    }

    return (
        <>
            <h3>A Gif Out Of Water!</h3>
            <p>Search millions of gifs for one that speaks to you.</p>
            <form>
                <input type='text'  value={imgQuery}  onChange={handleChange}></input>
                <button onClick ={handleClick}>Discovery Awaits!</button>
            </form>

            {gifs.map(gif => {
                return (
                    <div key={gif.id}>
                        <p>Title: {gif.title}</p>
                        <img src={gif.images.fixed_height_downsampled.url} alt={gif.title}></img>
                    </div>
                )
            })}
        </>
    )
}

