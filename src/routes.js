import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

