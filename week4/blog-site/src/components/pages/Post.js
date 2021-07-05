//import { section } from '../data/posts.json';

import React from "react";
import { useParams } from "react-router-dom";

export default function Post(){
    var {slug} = useParams(),
        post = getSlugged(slug);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

var dataCon = require('../data/posts.json')
function getSlugged(slug){
    return dataCon.find(e => e.slug === slug)
}