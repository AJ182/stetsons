import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './src/index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import About from './Pages/About';
import Music from './Pages/Music';
import Gigs from './Pages/Gigs';
import Videos from './Pages/Videos';
import Contact from './Pages/Contact'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={App} />
            <Route path="/about" component={About}/>
            <Route path="/music" component={Music}/>
            <Route path="/live-shows" component={Gigs}/>
            <Route path="/videos" component={Videos}/>
            <Route path="/contact" component={Contact}/>
        </Route>
    </Router>
  ,
  document.getElementById('root')
);
