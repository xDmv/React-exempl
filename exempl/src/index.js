import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import NotebookPage from './pages/todo-list/index'



const Main = () => {
    let shown = true;

    const showHide = {
      'display': shown ? 'block' : 'none'
    };

    const ReShown = () => {
        console.log('shown == ', shown);
        shown = !shown;

        return showHide;
    };

    return (
        <div className="container">
            <h1 style={ showHide }> List Example </h1>
            <button className="btn btn-outline-success" onClick={ ReShown }>Ex</button>
            <Router>
                {shown && <App />}
                
                <Route path="/notebook" component={ NotebookPage } />
            </Router>
        </div>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));