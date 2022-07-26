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
        <div className="headerTitle">
      
      <h1>
          The <a>Self Regulating</a> Crypto
      </h1>
      <h3>
        Join us in the world of DeFi
      </h3>

      <button className="headerButton">
                <a href="https://app.uniswap.org/#/swap?inputCurrency=0x86632544e69c8019babd01be75393f9c2d46ee70&outputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&chain=mainnet">
                    Buy&nbsp;$DNT
                </a>
                </button>
              
    </div>

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
