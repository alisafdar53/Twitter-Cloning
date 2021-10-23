import React from 'react'
import "./Widgets.css"
import SearchIcon from '@mui/icons-material/Search';
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">

            {/* Header */}
            <div className="widgets__input ">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            {/* Container */}
            <div className="widgets__container">
                <h2>What's happening!</h2>


                <TwitterTweetEmbed tweetId={"1449447489073864705"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="LuciferNetflix"
                    option={{ height: 300 }}
                />

                <TwitterShareButton
                    url={"https://twitter.com/ALIRAZA74444300"}
                    option={{ text: " #React js is Awesome", via: "alisafdar53" }}
                />


            </div>
        </div>
    );
}

export default Widgets;
