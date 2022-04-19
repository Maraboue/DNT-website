import './index.css';

// Assets

import space from './assets/videos/space.mp4';
import discord from './assets/images/discord-logo.png';
import twitter from './assets/images/twitter-logo.png';
import medium from './assets/images/medium-logo.jpg';
import github from './assets/images/GitHub-Mark.png';
function App() {
  return (
    <div>
        <div class="flex-container-header">
          <h1 id="header" class="header">The Self Regulating Cryptocurrency with Less Volatility.</h1>
        </div>
        <div class="flex-container">                                            
        <div class="text"><p>We Are Excited To Start This Journey With You.<br/>
        Let's Begin Building This New World of DeFi together.
        </p></div>
    </div>
   
    <div class="logo-container">
            <div class="copyright-dnt" id="dnt-logo-home">
            The Dynamic Network Project. All Rights Reserved ©
            </div>
            <div class="logo" id="dnt-logo-home">
                <a href="https://discord.gg/2d7PNevWJv">
                    <img src={discord} alt="Discord" />
                </a>
            </div>

            <div class="logo" id="dnt-logo-home">
                <a href="https://twitter.com/DynamicN3twork">
                    <img src={twitter} alt="Twitter" /></a>
            </div>
            <div class="logo" id="dnt-logo-home">
                <a href="https://dynamic-network.medium.com/">
                    <img src={medium} alt="Medium"/>
                </a>
            </div>
            <div class="logo" id="dnt-logo-home">
              <a href="https://github.com/Dynamic-Network">
                <img src={github} alt="Github" />
              </a>
            </div> 
        </div>
    <video preload="auto" loop autoPlay muted id="myVideo">
        <source src={space}/>
      </video>
    </div>
  );
}

export default App;
