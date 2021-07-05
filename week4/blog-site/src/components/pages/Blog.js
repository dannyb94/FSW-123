//--Home is the default view and renders links to all blog posts in the <main> area

import { Link } from "react-router-dom";
import React from "react";

var postInfo = require('../data/posts.json')
export default function Blog(){   
    const posts = postInfo.map(post => {
        return (
            <Link to={"/post/" + post.slug} key = {post.slug}>
            <div id="noSpace">
                <div id="wrap">
                    <div id="blogCntnr">
                        <h3>{post.title}</h3>
                    </div>
                </div>
            </div>
            </Link>
        )
    })

    return <div>{posts}</div>
}