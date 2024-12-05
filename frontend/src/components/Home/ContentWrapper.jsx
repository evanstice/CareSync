import React from 'react';
import './Home.css';

function ContentWrapper({ items }) {
    return (
        <div className="content-wrapper">
            {items.map((item, index) => (
                <div className="content-item" key={index}>
                    {item}
                </div>
            ))}
        </div>
    );
}

export default ContentWrapper;