import React from "react";
import './Contact.css';
import space from '../../assets/videos/space.mp4';


import Medium from './Medium';

import Twitter from './Twitter';

const Community = () =>  {


    return (
        <section className="community_section" id="community">

       
        <div class="CommunityContainer">

            <div className="CommunityItem">
                <h2>Dynamic Network on Twitter</h2>
                <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>

                <p>Follow us on Twitter to stay updated on whats happening in the network!
                   <br/><br/> Twitter is the best way to get news and updates about the Dynamic Network.
                </p>
            </div>
            <div id="twitter-item">
            <Twitter/>
            </div>
            <div className="CommunityForm">
                <h2>Contact Us - We want to hear from you!</h2>
                <form class="contact-form">
                    <h5>Mail</h5>
                    <input id="mail-input" type="text"></input>
                    <h5>Text</h5>
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
                <p>Follow us on Medium to stay updated on whats happening in the network!<br/>
                    <br/>   We frequently update our Medium with new blog posts about the development
                    for the Dynamic Network.
                </p>
            </div>
            <Medium/>
            
        </div>
    

   
        
    <video  loop autoPlay muted id="myVideo">
        <source src={space}/>
      </video>
        </section>
        

    )



}; export default Community;