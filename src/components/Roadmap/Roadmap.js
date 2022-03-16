import '../../index.css';
import './Roadmap.css';
import React, { useState } from "react";
// Assets

import discord from '../../assets/images/discord-logo.png';
import twitter from '../../assets/images/twitter-logo.png';
import medium from '../../assets/images/medium-logo.jpg';
import github from '../../assets/images/GitHub-Mark.png';
import space from '../../assets/videos/space.mp4';


import Footer from '../Footer/Footer.js';

function Roadmap() {

    const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);  
    if(isActive){
        document.getElementById("road-text").style.display = "none";
        document.getElementsByClassName("road-stop").style.display = "none";
    }
    else{
        document.getElementById("road-text").style.display = "block";
    }
  }
    const handleToggle1 = () => {
        setActive(!isActive);  
        if(isActive){
            document.getElementById("road-text1").style.display = "none";
        }
        else{
            document.getElementById("road-text1").style.display = "block";
    
        }
    }
        const handleToggle2 = () => {
            setActive(!isActive);  
            if(isActive){
                document.getElementById("road-text2").style.display = "none";
            }
            else{
                document.getElementById("road-text2").style.display = "block";
        
            }
        }

            const handleToggle3 = () => {
                setActive(!isActive);  
                if(isActive){
                    document.getElementById("road-text3").style.display = "none";
                }
                else{
                    document.getElementById("road-text3").style.display = "block";
            
                }
            
        
};



    return(
        <div>

            <div class="roadstop-container">
            <button class="road-btn" onClick={handleToggle}>
                <div class="road-stop">
                    <h2>Q1</h2>
                    <div id="road-text">
                    <p>Marketing the Dynamic Network.</p>
                    </div>
                </div>
                </button> 
                <button class="road-btn" onClick={handleToggle1}>
                <div class="road-stop">
                <h2>Q2</h2>
                    <div id="road-text1">
                    <p>New Exchange Listings for $DNT.</p>
                    </div>
                </div>
                </button> 
                
                <button class="road-btn" onClick={handleToggle2}>
                <div class="road-stop">
                <h2>Q3</h2>
                    <div id="road-text2">
                    <p>Partnerships and Community.</p>
                    </div>
                </div>
                </button> 
                <button class="road-btn" onClick={handleToggle3}>
                <div class="road-stop">
                <h2>Q4</h2>
                    <div id="road-text3">
                        <p>Continue Building the Project.</p>
                    </div>
                </div>
                </button> 

            </div>
            <Footer/>
    <video  loop autoPlay muted id="myVideo">
        <source src={space}/>
      </video>
    </div>

       
    );





}
export default Roadmap;