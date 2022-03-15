import React from "react";
import './Contact.css';


// Components 

import {useState} from "react";
import { send } from 'emailjs-com';
import Medium from './Medium';
import Twitter from './Twitter';

// Assets

import space from '../../assets/videos/space.mp4';
import discord from '../../assets/images/discord-logo.png';
import twitter from '../../assets/images/twitter-logo.png';
import medium from '../../assets/images/medium-logo.jpg';
import github from '../../assets/images/GitHub-Mark.png';

function Contact ()  {


    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Dynamic Network',
        message: '',
        reply_to: ''
      });

      const onSubmit = (e) => {
        console.log(toSend)
        e.preventDefault();
        send(
          "service_f3ugcj6",
          "template_8z65gan",
          toSend,
          'CdBOqvJOI9zgDnoZQ'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    

      const handleChange = (e) => {
        //console.log([e.target.name], e.target.value)
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };


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
                <form class="contact-form" onSubmit={onSubmit}>
                    <h5>Mail</h5>   
                    <input id="mail-input" type='text' name='from_name' placeholder='John@Doe.com'
                        value={toSend.from_name}
                        onChange={handleChange}/>
                    <h5 id="text-h5">Text</h5>
                    <textarea id="text-input" rows="20" cols="50" name="message" placeholder="Write your text here" 
                    value={toSend.message} onChange={handleChange}>
                    </textarea>
                    <button id="submit-btn" type="submit">Submit</button>
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
    


}; export default Contact;