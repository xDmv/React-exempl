import React from 'react';

import { Link } from 'react-router-dom';


const App = () => {
    
    return (
        <ol>
            <li>
                <Link to="/"> Clear </Link>
            </li>
            <li>
                <Link to="/notebook"> Notebook </Link>
            </li>
        </ol>
    );
}

export default App;