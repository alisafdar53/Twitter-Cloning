import React from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from "./Post";
import { useState, useEffect } from "react";
import db from "../firebase";
import FlipMove from "react-flip-move";


function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="feed">

            {/* Header */}
            <div className="feed__header">

                <h2> Home </h2>

            </div>

            {/* TextBox */}
            <TweetBox />

            {/* Post Sections */}
            <FlipMove>
                {posts.map((post) => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                        video={post.video}
                    />
                ))}
            </FlipMove>

            {/* <Post displayName="Ali Safdar"
                username="@alisafdar53"
                verified={true}
                text="Using Props --> Next step firebase"
                image="Image/Avatar.jpg"
                avatar="Image/Avatar.jpg"
            /> */}

        </div>
    )
}

export default Feed
