import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterGrid from '../interface/CharacterGrid';
import Search from '../interface/Search';

export default function Characters(){
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const getData = async () => {
            const getApi = await axios(`https://rickandmortyapi.com/api/character/?name=${query}`)

            console.log(getApi.data.results)

            setItems(getApi.data.results)
            setLoading(false)
        }

        getData()

    }, [query])

    return(
        <div>
            <Search getQuery={(e) => setQuery(e)} />
            <CharacterGrid loading={loading} items={items} />
        </div>
    )
}