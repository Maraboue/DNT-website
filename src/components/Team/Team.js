import '../../index.css';
import './Team.css';
import React, { useState } from "react";
// Assets

import discord from '../../assets/images/discord-logo.png';
import twitter from '../../assets/images/twitter-logo.png';
import medium from '../../assets/images/medium-logo.jpg';
import github from '../../assets/images/GitHub-Mark.png';
import space from '../../assets/videos/space.mp4';


import gustaf from '../../assets/images/image0.png'

import kajsa from '../../assets/images/image0.png'

import challe from '../../assets/images/image0.png'

import philip from '../../assets/images/image0.png'


function Team() {

    return(
        <div>

<div class="box">
      <div class="card">
        <div class="imgBx">
            <img src={gustaf}alt="images"/>
        </div>
        <div class="details">
            <h2>Gustaf Sjölinder<br/><span>Project Lead</span></h2>
        </div>
      </div>
    
       <div class="card">
         <div class="imgBx">
            <img src={kajsa} alt="images"/>
         </div>
         <div class="details">
            <h2>Kajsa Gyllhamn<br/><span>Marketing</span></h2>
          </div>
       </div>

       <div class="card">
         <div class="imgBx">
            <img src={challe} alt="images"/>
         </div>
         <div class="details">
            <h2>Carl-Bernhard Hallberg<br/><span>Developer</span></h2>
          </div>
       </div>
       <div class="card">
         <div class="imgBx">
            <img src={philip} alt="images"/>
         </div>
         <div class="details">
            <h2>Philip Retelius<br/><span>Advisor</span></h2>
          </div>
       </div>
 
  </div>



            


            <div class="logo-container">
            <div class="copyright-dnt">
            The Dynamic Network Project. All Rights Reserved ©
            </div>
            <div class="logo">
                <a href="https://discord.gg/2d7PNevWJv">
                    <img src={discord} />
                </a>
            </div>

            <div class="logo">
                <a href="https://twitter.com/DynamicN3twork">
                    <img src={twitter} /></a>
            </div>
            <div class="logo">
                <a href="https://dynamic-network.medium.com/">
                    <img src={medium} />
                </a>
            </div>
            <div class="logo">
              <a href="https://github.com/Dynamic-Network">
                <img src={github}  />
              </a>
            </div> 
        </div>


    <video  loop autoPlay muted id="myVideo">
        <source src={space}/>
      </video>
    </div>

       
    );





}
export default Team;