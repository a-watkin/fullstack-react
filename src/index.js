import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router'

// if the filename is index.js you can refer to it with 
// just the folder name
// import Routes from './routes/index.js'
import Routes from './routes'


ReactDOM.render(
    <Router
        history={browserHistory}
        router={Routes}
    />,
    // don't forget the comma above
    document.getElementById('root')
);
