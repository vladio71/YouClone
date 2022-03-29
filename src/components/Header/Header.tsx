import React from "react";
import sa from './Header.module.sass'
import YouTubeIcon from '@mui/icons-material/YouTube';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";

const Header = () => {


    return (
        <div style={{maxWidth:'100vw'}}>
            <div className={sa.Head}>
                <div className={sa.firstCell}>
                    <YouTubeIcon sx={{color: 'red', fontSize: 50}}/>
                    <Link to={'/'} style={{color:"black", marginTop:'1rem'}} >
                        <p>YouClone</p>
                    </Link>
                </div>
                <div>
                </div>
                <div className={sa.me}>
                    @ Make my Hell Brighter
                </div>
            </div>
        </div>

    )
}

export default Header