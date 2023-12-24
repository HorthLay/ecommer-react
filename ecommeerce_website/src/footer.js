import React from 'react'
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import './footer.css'
export const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo.png' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>We are a web development to design and made a incredble web ever</p>
                    <div className='icon'>
                       <li><RiFacebookBoxFill /></li>
                       <li><AiOutlineInstagram /></li>
                       <li><AiOutlineTwitter /></li>
                       <li><BiLogoYoutube /></li>
                       <li><BiLogoTiktok /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Card</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Page</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Term & Condition</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer;