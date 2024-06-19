import "./Frame1437252859.css";
import { VuesaxLinearSend2 } from "../VuesaxLinearSend2/VuesaxLinearSend2.jsx";
import Results from '../Results/results.jsx';
import { Login } from "../Login/login.jsx";
// import Login from "../Login/login.jsx";
import React, { useState } from 'react';
// import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export const Frame1437252859 = ({ className, ...props }) => {
  const [textInputValue, setTextInputValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // const [inputValue, setInputValue] = useState('');


  // price range slider
  const [value, setValue] =  React.useState([0,500]); 
  const rangeSelector = (event, newValue) => { 
    setValue(newValue); 
    console.log(newValue) 
  }; 

  const handleButtonClick = (text) => {
    setTextInputValue(text);
  };
  const toggleResults = () => {
    setShowResults(!showResults);
  };
  const toggleResultsOff = () => {
    setShowResults(showResults);
  };
  const handleLoginClick = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={"frame-1437252859 " + className}>

      <div className="left-sidebar">
        
      <button className="rectangle-8" onClick={toggleResultsOff}>
        <div className="new-chat">New Chat</div>
        <img className="plus" src="plus0.svg" />
      </button>

        <div className="line"></div>
        <div className="line2"></div>
        <div className="frame-1437252835">
          <button className="clear-conversations">
            <div className="clear-conversations2">Clear conversations </div>
            <img className="delete" src="delete0.svg" />
          </button>
          <button className="updates-faq">
            <div className="updates-faq2">Updates &amp; FAQ </div>
            <img className="enlarge" src="enlarge0.svg" />
          </button>
          <button className="logout">
            <div className="log-out">Log out </div>
            <img className="logout2" src="logout1.svg" />
          </button>
        </div>
        <button className="frame-1437252837">
          <img className="ellipse-517" src="ellipse-5170.png" />
          <div className="austin-dsouza">Austin Dsouza </div>
          <img
            className="vuesax-linear-setting-2"
            src="vuesax-linear-setting-20.svg"
          />
        </button>
        <img className="image-67-removebg-preview-1" src="image-67-removebg-preview-10.png"/>


        <button className="sign-up-button" onClick={handleLoginClick}>
          <div className="sign-up">Sign Up </div>
        </button>

        
      </div>

      <div className="desktop-2">
        {/* hgsf */}
      {showResults ? (
          <Results /> 
        ) : (
          <>

          {/* hsgfg */}
        <div className="good-day-how-may-i-assist-you-today">
          Good day! How may I assist you today?{" "}
        </div>
        <div className="frame-1437252838">
          <button className="frame-42">
            <div className="div">😄</div>
            <div className="healthy">Happy </div>
          </button>
          <button className="frame-43">
            <div className="div">😩 </div>
            <div className="savory">Famished </div>
          </button>
          <button className="frame-44">
            <div className="div">🧐 </div>
            <div className="sweet">Curious </div>
          </button>
        </div>
        {/* price */}
        <div className="price-range"> 
      <Slider 
      className="slider"
        value={value} 
        onChange={rangeSelector} 
        min={0}         
        max={5000}     
        step={50} 
        sx={{
          color: '#00c100',
          '& .MuiSlider-thumb': {
          }
        }}/>

<span className="price">₹{value[0]} - ₹{value[1]}</span>
    </div> 
        <div className="rectangle-91908"></div>
        <div className="frame-422">
          <div className="group-1437252826">
            <div className="group-1437252825">
              <div className="div2">🧠 </div>
              <div className="div3">🧠 </div>
            </div>
          </div>
          


          <input type="text" 
                  value={textInputValue}
                  onChange={(e) => setTextInputValue(e.target.value)}
                  className="what-s-in-your-mind" 
                  placeholder="What’s in your mind?..." />
          {/* <div className="what-s-in-your-mind">What’s in your mind?... </div> */}
        </div>
        </>
        )}
        {!showResults && (
        <button className="frame-39" onClick={toggleResults}>
          <VuesaxLinearSend2 className="vuesax-linear-send-2-instance"></VuesaxLinearSend2>
        </button>
        )}
      </div>
      {!showResults && (
      <div className="frame-1437252846">
        <div className="frame-1437252842">
          <div className="frame-1437252841">
            <img className="group-1437252828" src="group-14372528280.svg" />
            <div className="try-searching">Try searching </div>
          </div>
          <button className="frame-1437252839"
              onClick={() =>
                handleButtonClick("🍕🏏 'Boundary Pizza' for Kohli's hits!")}>
            <div className="boundary-pizza-for-kohli-s-hits">
              🍕🏏 &#039;Boundary Pizza&#039; for Kohli&#039;s hits!{" "}
            </div>
          </button>
          <button className="frame-14372528422"
             onClick={() =>
              handleButtonClick("🍟🏏 'Yorker Fries' for Bumrah's bowls!")}>
            <div className="yorker-fries-for-bumrah-s-bowls">
              🍟🏏 &#039;Yorker Fries&#039; for Bumrah&#039;s bowls!{" "}
            </div>
          </button>
        </div>
        <button className="frame-1437252843"
            onClick={() =>
              handleButtonClick("🍦🏏 'Century Sundaes' for every hundred!")}>
          <div className="century-sundaes-for-every-hundred">
            🍦🏏 &#039;Century Sundaes&#039; for every hundred!{" "}
          </div>
        </button>
        <button className="frame-1437252845"   
            onClick={() =>
                handleButtonClick("🥤🏏 'Wicket Shakes' for the breaks!")}>
          <div className="wicket-shakes-for-the-breaks">
            🥤🏏 &#039;Wicket Shakes&#039; for the breaks!{" "}
          </div>
        </button>
      </div>
      )}
      <div className="aveo-ai-mar-19-version-free-preview-our-goal-is-to-make-ai-systems-more-natural-and-safe-to-interact-with-your-feedback-will-help-us-improve">
        <span>
          <span className="aveo-ai-mar-19-version-free-preview-our-goal-is-to-make-ai-systems-more-natural-and-safe-to-interact-with-your-feedback-will-help-us-improve-span">
            Aveo AI Mar 19 Version.
          </span>
          <span className="aveo-ai-mar-19-version-free-preview-our-goal-is-to-make-ai-systems-more-natural-and-safe-to-interact-with-your-feedback-will-help-us-improve-span2">
            {" "}
            Free Preview. Our goal is to make AI systems more natural and safe
            to interact with. Your feedback will help us improve.
          </span>
        </span>{" "}
      </div>
      {showPopup && 
          <Login onClose={handleClosePopup} />
        }
      
    </div>
  );
};
export default Frame1437252859;
