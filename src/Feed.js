import React from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
    return (
        <div className="feed">
            {/* header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* tweetbox */}
            <TweetBox />
            {/* post */}
             <Post />
             <Post />
             <Post />
             <Post />
             <Post />
             <Post />
             <Post />
             <Post />
            {/* post */}
            {/* post */}
            {/* post */}
            {/* post */}
        </div>
    );
}

export default Feed;
