import React, { useState } from 'react';
import { Login } from "../Login/login.jsx";
import "./Layout.css";

const Sidebar = () => {
    const [textInputValue, setTextInputValue] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    
    const handleButtonClick = (text) => {
        setTextInputValue(text);
        toggleResults(); // Toggle results when button is clicked
    };
    
    const toggleResults = () => {
        setShowResults(!showResults);
    };
    
    const handleLoginClick = () => {
        setShowPopup(true);
    };
    
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="left-sidebar">
            <button className="rectangle-8" onClick={handleButtonClick}>
                <div className="new-chat">New Chat</div>
                <img className="plus" src="plus0.svg" alt="Plus icon" />
            </button>

            <div className="line"></div>
            <div className="line2"></div>
            
            <div className="frame-1437252835">
                <button className="clear-conversations">
                    <div className="clear-conversations2">Clear conversations </div>
                    <img className="delete" src="delete0.svg" alt="Delete icon" />
                </button>
                <button className="updates-faq">
                    <div className="updates-faq2">Updates & FAQ </div>
                    <img className="enlarge" src="enlarge0.svg" alt="Enlarge icon" />
                </button>
                <button className="logout">
                    <div className="log-out">Log out </div>
                    <img className="logout2" src="logout1.svg" alt="Logout icon" />
                </button>
            </div>
            
            <button className="frame-1437252837">
                <img className="ellipse-517" src="ellipse-5170.png" alt="Ellipse" />
                <div className="austin-dsouza">Austin Dsouza </div>
                <img className="vuesax-linear-setting-2" src="vuesax-linear-setting-20.svg" alt="Settings icon" />
            </button>
            
            <img className="image-67-removebg-preview-1" src="image-67-removebg-preview-10.png" alt="Preview image"/>

            <button className="sign-up-button" onClick={handleLoginClick}>
                <div className="sign-up">Sign Up </div>
            </button>
            
            {/* {showPopup && <Login onClose={handleClosePopup} />} */}
        </div>
    );
};

export default Sidebar;
