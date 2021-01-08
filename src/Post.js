import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


function Post({displayName, username, verified,
text, image, avatar}) {
    return (
        <div className="post">
            <div className ="post__avatar">
            <Avatar src ={avatar}></Avatar>       
            </div>
            <div class="post__body">
                <div class="post__header">
                    <div class="post__headerText">
                        <h3>
                            {displayName}{""}
                            <span className="post__headerSpecial">
                            {verified && <VerifiedUserIcon className="post__badge" />}@{username}
                            </span>
                        </h3>
                    </div>
                    <div class="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="post__imgbody">
                    <img src={image} alt=""></img>
                </div>
                <div class="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                     <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
