import React, { Fragment } from 'react';

function FeedItem(props) {
    const { contacts } = props;
    const contactsjsx = contacts.map(c => (
        <div key={c.id}>
            <div>Name: {c.name}</div>
        </div>
    ))
    return (
        <Fragment>{contactsjsx}</Fragment>
    )
}

export default FeedItem;