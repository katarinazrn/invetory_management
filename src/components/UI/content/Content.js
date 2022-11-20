import React from 'react';
import './Content.css';

const Content = (props) => {

    return (
        <React.Fragment>
            <h2 id='title'>{props.title}</h2>
            <div id='content'>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Content;