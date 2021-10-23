import React from 'react'
import "./TweetBox.css";
import { Avatar, Button } from '@material-ui/core';
import { useState } from 'react';
import db from "../firebase";

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState(" ");
    const [tweetImage, setTweetImage] = useState(" ");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Ali Safdar",
            username: "@alisafdar53",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "Image/Avatar.jpg",
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetbox">
            <form>

                <div className="tweetbox__input">
                    <Avatar src="Image/Avatar.jpg" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        type="text"
                        placeholder="Yo! What's happening?"
                        value={tweetMessage}
                    />
                </div>

                {<input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetbox_image"
                    placeholder="Optional: Enter Image URL" type="text"
                />}


                <Button onClick={sendTweet} type="submit" className="tweetbox__button">Tweet</Button>

            </form>
        </div>
    )

}

export default TweetBox;
