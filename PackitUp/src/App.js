import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import ForBusiness from './Components/ForBusiness';
import Partners from './Components/Partners';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/About" exact component={About}/>
                <Route path="/ForBusiness" exact component={ForBusiness}/>
                <Route path="/Partners" exact component={Partners}/>
                <Route path="/Contact" exact component={Contact}/>
                <Route path="/Blog" exact component={Blog}/>

            </Switch>
        </BrowserRouter>
    );
}

export default App;
