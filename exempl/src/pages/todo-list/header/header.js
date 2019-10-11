import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1> Important Event Notebook Example </h1>
            <Link to="/">
                <button type="button" className="btn btn-outline-success">Back</button>
            </Link>
        </div>
    );
};

export default Header;