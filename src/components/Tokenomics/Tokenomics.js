import '../../index.css';
import './Tokenomics.css';
// Assets

import space from '../../assets/videos/space.mp4';
import discord from '../../assets/images/discord-logo.png';
import twitter from '../../assets/images/twitter-logo.png';
import medium from '../../assets/images/medium-logo.jpg';
import PieChart from './Piechart';

function App() {
  return (
    <div>
        
        <div class="flex-container">
        <div  id="TokenInfo" class="TokenInfo">
            <h1>Why Dynamic Network Token?</h1>
            <br/>
            <h2>Burning & Minting</h2>
            <p>
                In accordance with the quantitative theory of money, we have implemented
                burning and minting for each transaction. This makes it possible to control
                the volatility in a better way, thus making the Dynamic Network Token less volatile. The ratio
                implemented for the burning and minting is close to 2:1 in favor for the burning, which creates
                a more deflationary token.
            </p>
            <a href ="https://docs.google.com/document/d/e/2PACX-1vQzA6xMEXmCYq4tD0ME-t24BBj4bDVx14lvL1oj3MHpDKb41DIdfwvhR79NxmrKXtpKzVVME1VxGjrj/pub">Read More</a>
            <h2>Network Based Burning</h2>
            <p>
                We believe that a good token is backed by a strong network. Therefore, we have implemented Network Based
                Burning. This means that as the Dynamic Network grows, burns will occur based on the amount of users in the network.
                This functionality also adds another deflationary property built in to the Dynamic Network Token.
            </p>
            <a href ="https://docs.google.com/document/d/e/2PACX-1vTLgagJ4YEUFDJajGyl3SYT9tbbfLIvdq8e8Bj7qsK3IqAgdk0KUlK8b6LD_ejYawL6gdL91a4F-Hgq/pub">Read More</a>
            <h2>Less Volatility</h2>
            <p>
                Before launching the Dynamic Network Token, we have conducted research that indicates that the token with
                its burning and minting implemented, is less volatile than a token that does not have this functionality
                implemented. This will in theory lead to a more stable growth, making the Dynamic Network Token a safer
                investment.
            </p>
            <a href ="https://docs.google.com/document/d/e/2PACX-1vQzA6xMEXmCYq4tD0ME-t24BBj4bDVx14lvL1oj3MHpDKb41DIdfwvhR79NxmrKXtpKzVVME1VxGjrj/pub">Read More</a>
            </div>
            <div class="ChartInfo">
            <PieChart/>
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
              <a href="http://www.google.com/%22%3E">
                <img src={discord}  />
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