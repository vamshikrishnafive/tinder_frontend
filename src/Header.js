import React from 'react'
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import FormIcon from "@material-ui/icons/Forum"

function Header() {
    return (
        <div className = 'header'>

            <IconButton> 
                <PersonIcon frontSize = 'large' className = 'header__icon' />
            </IconButton>

            <img
                className = "header__logo"
                src = "https://www.citypng.com/public/uploads/preview/-11595271312g4gmrjgnms.png" 
                alt = "tinder logo" 
            />
            <IconButton>
                <FormIcon frontSize = 'large' className = 'header__icon'/>
            </IconButton>
            
        </div>
    )
}

export default Header
