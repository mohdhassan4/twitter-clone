import { Button, Avatar } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

function TweetBox() {
    return (
        <div class="tweetBox">
             <form>
                 <div class="tweetBox__input">
                     <Avatar src = "https://instagram.fhyd14-2.fna.fbcdn.net/v/t51.2885-19/s150x150/124287600_2747533462125538_3030247874556366165_n.jpg?_nc_ht=instagram.fhyd14-2.fna.fbcdn.net&_nc_ohc=V6n9BfTBbkMAX_h4WZI&tp=1&oh=10b922fead230f8c0237a21d987f55f4&oe=601E74E4"></Avatar>
                     <input placeholder ="whats happening" type="text"></input>
                  </div>
                 <Button className="tweetBox__tweetButton">Tweet</Button>
              </form>
        </div>
    );
}

export default TweetBox
