import React from 'react';

import Header from '../header/header';
import Search from '../search/search';
import List from '../list/list-items';


const NotebookPage = () => {
    return (
        <div>
            <Header />
            <Search />
            <List />
        </div>
    );
}

export default NotebookPage;