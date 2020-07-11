import React from 'react';
import FeedItem from './FeedItem';
import './Feed.css';
import Loading from './../hocs/Loading';

class Feed extends React.Component {
    logName() {
        console.log(Feed.name || Feed.displayName || 'Component');
    }
    render() {
        const { contacts } = this.props;
        return (
            <div className="flex-container">
                <FeedItem contacts={contacts} />
            </div>
        )
    }
}

export default Loading('contacts')(Feed);