import React, {Component} from 'react';

var Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    React Boilerplate 3
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Main;