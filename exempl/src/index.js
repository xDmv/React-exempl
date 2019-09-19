import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return <h1> Main page </h1>;
};

const Search = () => {
    let SearchText = "Type Search";
    return ( 
        <div className="form-group">
            <label className="control-label" >Search</label>
            <input className="form-control" id="disabledInput" type="text" placeholder={SearchText} disabled=""/>
        </div>
    );
}

const List = () => {
    return (
        <ol>
            <li>First App</li>
            <li>Second App</li>
            <li>Third App!</li>
        </ol>
    );
}

const el = (
    <div className="container">
        <Header />
        <Search />
        <List />
    </div>
);
// const el = React.createElement('h1', null, 'New IT technology!');

ReactDOM.render(el, document.getElementById('root'));