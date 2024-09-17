import React from 'react';
import Review from './Review';
import Trending from './Trending';

const Welcome = () => {
    return (
        <div>
            <h2>Trending NOW</h2>
            <p>Welcome to my app.</p>
            <Trending />
            <Review  />
        </div>
    )
}

export default Welcome;