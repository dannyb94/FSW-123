import { Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Characters from '../pages/Characters';
import Trailer from "../pages/Trailer";

export default function Body(){
    return (
        <Switch>
            <Route exact={true} path='/home'>
                <Home />
            </Route>

            <Route path='/characters'>
                <Characters />
            </Route>

            <Route path='/trailer'>
                <Trailer />
            </Route>
        </Switch>
    )
}