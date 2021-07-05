//Body will define the four Routes (Links to an external site.) for the the components (Home, About, Contact and Post)

import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Post from "../pages/Post"

export default function Body(){    
    return (
        <Switch>
            <Route exact = {true} path = "/blog">
                <Blog/>
            </Route>

            <Route path = "/about">
                <About/>
            </Route>

            <Route path = "/contact">
                <Contact/>
            </Route>

            <Route path = "/post/:slug">
                <Post/>
            </Route>
        </Switch>
    )
}