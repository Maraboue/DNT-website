import './index.css';
import Navbar from './components/Navbar';


// Assets

import space from './assets/videos/space.mp4';
import discord from './assets/images/discord-logo.png';

function App() {
  return (
    <div>
      <Navbar/>
        <div class="flex-container-header">
          <p id="header">The self regulating Cryptocurrency, with less Volatility.</p>
        </div>
        <div class="flex-container">
        <div class="text"><p>We Are Excited To Start This Journey With You.<br/>
        Let's Begin Building This New World of DeFi together.
        </p></div>
    </div>
   
    <div class="logo-container">
            <div class="copyright-dnt">
            The Dynamic Network Project. All Rights Reserved ©
            </div>
            <div class="logo">
                <a href="http://www.google.com/%22%3E">
                    <img src={discord} />
                </a>
            </div>

            <div class="logo">
                <a href="http://www.google.com/%22%3E">
                    <img src={discord} /></a>
            </div>
            <div class="logo">
                <a href="http://www.google.com/%22%3E ">
                    <img src={discord} />
                </a>
            </div>
            <div class="logo">
            <a href="http://www.google.com/%22%3E"><img src={discord}  /></a>
            </div> 
        </div>
    <video preload="auto" loop autoPlay muted loop id="myVideo">
        <source src={space}/>
      </video>
    </div>
  );
}

export default App;
