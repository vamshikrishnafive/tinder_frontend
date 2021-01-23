import React from 'react';
import './SwipButtons.css';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipButtons() {
    return (
        <div className = "swipeButtons">
            <IconButton className = "swipeButtons__repeat">
                <ReplayIcon frontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__left">
                <CloseIcon frontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__star">
                <StarRateIcon frontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__right">
                <FavoriteIcon frontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__repeat">
                <ReplayIcon frontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtons__lightning">
                <FlashIcon frontSize = "large" />
            </IconButton>
        </div>
    )
}

export default SwipButtons
