import React, { useState } from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import RecommendationBox from './components/RecommendationBox'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function MainView() {
    const [userName, setUserName] = useState('');

    return (
        <Router>
            <Switch>
                <Route path="/register">
                    <SignUp setGlobalUserName={name => setUserName(name)}/>
                </Route>
                <Route path="/home">
                    <RecommendationBox userName={userName}/>
                </Route>
                <Route path="/">
                    <SignIn setGlobalUserName={name => setUserName(name)}/>
                </Route>

            </Switch>
        </Router>
    )
}

export default MainView
