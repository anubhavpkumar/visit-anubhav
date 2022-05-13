import React from "react";
import './styles.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = props => {
    return (<>
        <div className='topNav'>
            <div className='nameHeading'>
                <img className='nameLogo' src='https://i.ibb.co/Vm06Wh1/signature.png'/>
            </div>
            <div className='menu'>
                <div className='menuItems'><a className="smIcon" target="_blank" href="https://instagram.com/anubhav_p_kumar/"><InstagramIcon/></a></div>
                <div className='menuItems'><a className="smIcon" target="_blank" href="https://www.facebook.com/anubhavkumar11101995"><FacebookOutlinedIcon /></a></div>
                <div className='menuItems'><a className="smIcon" target="_blank" href="https://www.linkedin.com/in/anubhav-prabhat-kumar/"><LinkedInIcon /></a></div>
            </div>
        </div>
    </>)
}

export default  NavBar;
