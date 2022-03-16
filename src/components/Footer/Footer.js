import '../../index.css';


import React, { useState } from "react";
// Assets

import discord from '../../assets/images/discord-logo.png';
import twitter from '../../assets/images/twitter-logo.png';
import medium from '../../assets/images/medium-logo.jpg';
import github from '../../assets/images/GitHub-Mark.png';


function Footer() {





    return(

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


    );

    }
    export default Footer;


