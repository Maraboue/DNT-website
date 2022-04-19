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
            console.log('SUCCESS, MESSAGE SENT!', response.status, response.text);
            alert('SUCCESS, MESSAGE SENT!', response.status, response.text);
            e.target[0].value = "";
            e.target[1].value = "";
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
          
          toSend.from_name = "";
          toSend.message = "";
        
          }
          

      
    

      const handleChange = (e) => {
        //console.log([e.target.name], e.target.value)
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

  
    return (
        <section className="community_section" id="community">



    <div className="ContactContainer">   
    <div className="CommunityForm">
                <h2>Contact Us</h2>
                <form class="contact-form" id="contact-form" onSubmit={onSubmit}>
                    <h5>Mail</h5>   
                    <input id="mail-input" type='text' name='from_name' placeholder='johndoe@mail.com'
                        value={toSend.from_name}
                        onChange={handleChange}/>
                    <h5 id="text-h5">Message</h5>
                    <textarea id="text-input" name="message" placeholder="What's on your mind?" 
                    value={toSend.message} onChange={handleChange}>
                    </textarea>
                    <button id="submit-btn" type="submit">Submit</button>
                </form>
            </div>
       </div>
   

 
        <div id="contact-logo" class="logo-container">
            <div class="copyright-dnt">
            The Dynamic Network Project. All Rights Reserved ©
            </div>
            <div class="logo">
                <a href="https://discord.gg/2d7PNevWJv">
                    <img src={discord} alt="Discord" />
                </a>
            </div>

            <div class="logo">
                <a href="https://twitter.com/DynamicN3twork">
                    <img src={twitter} alt="Twitter" /></a>
            </div>
            <div class="logo">
                <a href="https://dynamic-network.medium.com/">
                    <img src={medium} alt="Medium" />
                </a>
            </div>
            <div class="logo">
              <a href="https://github.com/Dynamic-Network">
                <img src={github} alt="Github" />
              </a>
            </div> 
        </div>


   
        
    <video  loop autoPlay muted id="myVideo">
        <source src={space}/>
      </video>
        </section>
        

    )
    


}; export default Contact;