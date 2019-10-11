import React from 'react';

const Item = () => {

    return (
        <span>
            <span>item </span>
            <button type="button" className="btn btn-outline-info">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
            </button>
            <button type="button" className="btn btn-outline-success">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </span>
    );
}

export default Item;