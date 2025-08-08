import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">

                <div className="footer-conleft">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque sequi officia deleniti magnam iure consectetur exercitationem pariatur,</p>
                    <div className="footer-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" /></div>

                </div>
                <div className="footer-concenter">
                    <h2>Nz Del </h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Del</li>
                        <li>policy</li>
                    </ul>

                </div>
                <div className="footer-conright">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91 8792451878</li>
                        <li>nzdel@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2025 @ Tomato.com</p>
    </div>
    )
}

export default Footer