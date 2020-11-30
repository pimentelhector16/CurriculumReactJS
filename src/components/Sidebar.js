import React from 'react'
import { FaFacebook,FaGithub,FaInstagram,FaFilePdf, FaPhone } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Avatar from './assets/avatar.jpeg'
//import {Curriculum} from './assets/curriculum.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:hpprogramming16@gmail.com")
    }
    return (
        <div className="">
            <img src={Avatar} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">
                Héctor <span>Pimentel</span>
            </div>
            <div className="sidebar__item sidebar__title">
                Web Developer 
            </div>
            <a href="a" download="curriculum.pdf">
                <div className="sidebar__item">
                    <FaFilePdf className="sidebar__icon" />
                    Descargar
                </div>
            </a>
            <figure className="sidebar__social-icons">
                <a href="#a">
                    <FaFacebook className="sidebar__icon"/> 
                </a>
                <a href="#a">
                    <FaInstagram className="sidebar__icon"/> 
                </a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item">
                    <FaGithub className="sidebar__icon"/> pimentelhector16
                </div>
                <div className="sidebar__item">
                    <FaPhone className="sidebar__icon"/> 0412 - 0804636
                </div>
                <div className="sidebar__item">
                    <small>hpprogramming16@gmail.com</small>
                </div>
                
            </div>
            <div className="sidebar__item sidebar__email">
                    <FiMail className="sidebar__icon" onClick={handleEmailMe} />
            </div>
        </div>
    )
}

export default Sidebar