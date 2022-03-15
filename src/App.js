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
          <p id="header" class="header">The Self Regulating Cryptocurrency, with Less Volatility.</p>
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
    <video preload="auto" loop autoPlay muted loop id="myVideo">
        <source src={space}/>
      </video>
    </div>
  );
}

export default App;
