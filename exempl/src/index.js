import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
    return <h1> Main page </h1>;
};

const Search = () => {
    let SearchText = "Type Search";
    return (
        <input placeholder={SearchText} />
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
    <div>
        <Header />
        <Search />
        <List />
    </div>
);
// const el = React.createElement('h1', null, 'New IT technology!');

ReactDOM.render(el, document.getElementById('root'));