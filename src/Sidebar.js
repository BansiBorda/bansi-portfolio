import React from 'react';
import profileImg from './image/cat.jpg';
import { FaGithub, FaTwitter, FaLinkedin, FaCodepen, FaDev, FaBehance } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src={profileImg} alt="Profile" />
                <div className="profile-info">
                    <h2>Tech Geek</h2>
                    <p>
                        I’m Bansi, a frontend dev who’s passionate about bringing cool ideas to life with React.js. With my JavaScript and CSS superpowers, I create vibrant, user-friendly web experiences that pop! When I’m not coding, you’ll find me exploring the latest tech or helping others level up their skills. Feel free to dive into my portfolio and see the magic I’ve been working on!
                    </p>
                </div>
                <div className="social-icons">
                    <a href="#"><FaGithub /></a>
                    <a href="https://github.com/BansiBorda"><FaTwitter /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaCodepen /></a>
                    <a href="#"><FaDev /></a>
                    <a href="#"><FaBehance /></a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
