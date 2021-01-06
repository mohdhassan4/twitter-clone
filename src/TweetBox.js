import { Button, Avatar } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

function TweetBox() {
    return (
        <div class="tweetBox">
             <form>
                 <div class="tweetBox__input">
                     <Avatar src = "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"></Avatar>
                     <input placeholder ="whats happening" type="text"></input>
                  </div>
                 <Button className="tweetBox__tweetButton">Tweet</Button>
              </form>
        </div>
    );
}

export default TweetBox
