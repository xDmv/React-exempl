import React from 'react';

import Filter from '../filter/filter';

const Search = () => {
    let SearchText = "Search example";
    return (
        <div className="form-group">
            <label className="control-label">Search list examples</label>
            <div className="form-group">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder={SearchText} />
                    <div className="input-group-append">
                        {/* <button className="btn btn-outline-success">Search</button> */}
                        <Filter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;