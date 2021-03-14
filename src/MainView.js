import React, { useState } from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ListenedList from './components/ListenedList'
import DiscoverArtist from './components/DiscoverArtist'
import RecommendationBox from './components/RecommendationBox'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import DiscoverArtist from './components/DiscoverArtist'


function MainView() {
    const [userName, setUserName] = useState('');
    const logout = () => {
        setUserName('');
    }
    return (
        <Router>
            <Switch>
                <Route path="/register">
                    <SignUp setGlobalUserName={name => setUserName(name)} />
                </Route>
                {userName !== '' &&
                    (<Route path="/home">
                        <RecommendationBox userName={userName} logout={logout} />
                    </Route>)}
                {userName !== '' &&
                    (<Route path="/history">
                        <ListenedList userName={userName} logout={logout} />
                    </Route>)}
                {userName !== '' &&
                    (<Route path="/search">
                        <DiscoverArtist userName={userName} logout={logout} />
                    </Route>)}
                <Route path="/">
                    <SignIn setGlobalUserName={name => setUserName(name)} />
                </Route>

            </Switch>
        </Router>
    )
}

export default MainView
