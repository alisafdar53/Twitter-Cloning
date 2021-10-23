import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@material-ui/core";
import SidebarOption from "./SideOption"

function Sidebar() {
    return (
        <div className="sidebar">

            {/* Header */}
            <TwitterIcon className="sidebar__twitterIcon" />

            {/* Body */}
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button className="tweet__button" variant="outlined" fullWidth>
                Tweet
            </Button>



            {/* Footer */}
            {/*
            <footer>
                <button className="account" variant="outlined" fullWidth>
                    <div className="Image">
                        <img
                            alt=" ALI SAFDAR"
                            src="https://pbs.twimg.com/profile_images/1283952262239457280/H4nTwF9m_x96.jpg"
                        />
                    </div>

                    <div>
                        <div className="name">ALI SAFDAR</div>
                        <div className="username">@ALIRAZA74444300</div>
                    </div>

                </button>
            </footer>
    */}


        </div>
    );
}

export default Sidebar;
