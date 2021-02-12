import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

import Login from "../Containers/Login/Login"
import Index from "../Containers/Index/Index"

const App = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/Principal" component={Index}/>

        
        </Switch>
    </BrowserRouter>
)

export default App