import React from "react";
import './Contact.css';
import space from '../../assets/videos/space.mp4';


import Medium from './Medium';

import Twitter from './Twitter';


import discord from '../../assets/images/discord-logo.png';
import twitter from '../../assets/images/twitter-logo.png';
import medium from '../../assets/images/medium-logo.jpg';
import github from '../../assets/images/GitHub-Mark.png';

const Community = () =>  {


    return (
        <section className="community_section" id="community">

       
        <div class="CommunityContainer">

            <div id="twitter-text" className="CommunityItem">
                <h2>Dynamic Network on Twitter</h2>
                <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>

                <p>Follow us on Twitter to stay updated on what's happening in the network!
                   <br/><br/> Twitter is the best way to get news and updates about the Dynamic Network.
                </p>
            </div>
            <div id="twitter-item">
            <Twitter/>
            </div>
            <div className="CommunityForm">
                <h2>Contact Us - We want to hear from you!</h2>
                <form class="contact-form">
                    <h5>Name</h5>
                    <input id="mail-input" type="text"></input>
                    <h5 id="text-h5">Text</h5>
                    <textarea id="text-input" rows="20" cols="50">
                    </textarea>
                    <button id="submit-btn" type="submit" value="submit">Submit</button>
                </form>
            </div>
        
        </div>

        <div className="CommunityContainer">

            <div id="medium-item" className="CommunityItem">
                <h2>Dynamic Network on Medium</h2>
                <img src="https://img.icons8.com/color/48/000000/medium-monogram.png"/>
                <p>Follow us on Medium to stay updated on what's happening in the network!<br/>
                    <br/>   We frequently update our Medium with new blog posts about the development
                    for the Dynamic Network.
                </p>
            </div>
            <Medium/>
            
        </div>
        <div id="contact-logo" class="logo-container">
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
        </section>
        

    )



}; export default Community;