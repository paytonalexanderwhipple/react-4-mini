import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Route1 from './Route1.jsx';
import Route2 from './Route2.jsx';
import Route3 from './Route3.jsx';


export default (
    <Switch>
        <Route path="/" component={Route1}/>
        <Route path="/2" component={Route2}/>
        <Route path="/3" component={Route3}/>
    </Switch>
)