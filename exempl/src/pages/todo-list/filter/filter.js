import React, { Component } from "react";

export default class Filter extends Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info">All</button>
                <button type="button" className="btn btn-outline-success">Active</button>
                <button type="button" className="btn btn-outline-success">Done</button>
            </div>
        );
    };
}