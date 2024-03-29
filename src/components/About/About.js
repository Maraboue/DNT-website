import '../../index.css';
import './About.css';


// Assets

import discord from '../../assets/images/discord-logo.png';
import twitter from '../../assets/images/twitter-logo.png';
import medium from '../../assets/images/medium-logo.jpg';
import github from '../../assets/images/GitHub-Mark.png';
import space from '../../assets/videos/space.mp4';

function About() {
  return (
    <div>
        
        <div class="About-container">

            
            <div id="AboutItem" className="AboutItem1">
                        <div id="Background" className="Background">

                        <h1>Background</h1>
                
                        <p>

                            The Internet provided humans a new way to exchange information digitally and has changed how
                            we communicate.
                            Blockchain and cryptocurrencies have given humans a new way to exchange value over the
                            internet.
                            <br/><br/>
                            With new technology, new possibilities arise, but not always
                            without issues. One problem that has risen with cryptocurrencies is their high volatility,
                            meaning that the currency has big price swings.
                            It has made these currencies objects for speculation and investment almost exclusively, and
                            therefore they have lost their functionality as a currency.
                            <br/><br/>
                            For a currency to be viewed as a good means of payment, it cannot be associated with high
                            volatility. This is not only restricted to cryptocurrencies,
                            as for example the Venezuelan Bolivar is a fiat currency with historically high volatility
                            and has been losing its purchasing power due to
                            hyperinflation in the recent years.
                            <br/><br/>
                            In regard to this we propose a new cryptocurrency token; the Dynamic Network Token, which aims to
                            reduce the volatility in a cryptocurrency token
                            by regulating the supply dynamically with burning and minting. The implementation of this
                            functionality will strive to remove the high volatility in the
                            token for the benefits of a more stable and linear growth, and at the same time encourage
                            users to transact with the Dynamic Network Token between each other.
                        </p>
                        </div>
                        </div>
                    <div id="AboutItem" className="AboutItem2">

                        <h1>Research</h1>
            
                        <p>
                            Behind the Dynamic Network Token lies a lot of research. We thought that by using machine
                            learning and linear regression, a fairly good prediction
                            of price behaviour could be obtained.<br/><br/>
                            Starting of with creating a price simulation program, using the simple parameters of price,
                            market cap and total supply, a study could be conducted which showed that our implementations
                            actually reduced the volatility in the Dynamic Network Token.
                           <br/><br/>
                            A simple monetary theory which has been around for several hundreds of years is the QTM or
                            Quantitative Theory of Money. This theory state that the supply is the governing factor driving the
                            price of any asset in a society. With this in mind, we decided to make use of the concepts of
                            burning and minting to govern the volatility in the Dynamic Network Token. By implementing this
                            functionality dynamically, i.e., when ever a buy or sell occurs, our belief is that we
                            can reduce the volatility and thus provide a more stable and safe investment.
                            <br/><br/>
                            We also believe in scarcity and that deflationary properties play a crucial roll in any sound
                            investment asset for the long term. Therefore, the implemented burning and minting should be
                            in favor for the burning and the reduction of the total supply of the token.
                        </p></div>

                        <div id="AboutItem" className="AboutItem1">
                        <h1>Results</h1>
                       
                       <p> To test the functionality of burning and minting, a developed Java-program was used that simulates transactions.
                        In order to be able to compare the impact/effect that burning and minting has on reducing volatility, simulations
                        of transactions were performed with dynamic burning and minting implemented versus without the functionality implemented.
                        <br/> <br/>
                        All iterations for the price evolution without dynamic minting and burning resulted in an average sigma or standard
                        deviation of <strong>0,44774127.</strong> Meaning that the price without the dynamic functionality experienced high volatility.
                           <br/> <br/>
                        The different price evolution for the dynamic minting and burning price resulted in an average standard deviation of <strong>0,38645927</strong>. Showing that the impact that the dynamic functionality had on price growth resulted in a reduction of volatility. <br/> <br/>
                        The result shows that over these iterations with burning and minting, volatility is reduced by <strong>6,128%</strong> compared to how the price
                        is affected without the implemented functionality.</p></div>
                    <div id="AboutItem" className="AboutItem2">

                        <h1>Vision</h1>
                        <p> Looking forward, we are excited to see how the community will grow and how we together can
                            build a future were a crypto can act as both a store of value while also providing a good
                            way of transacting.
                            <br/><br/>
                            Over time, our vision lies in the hands of the Dynamic Network community. We are eager to see
                            what kind of experiences the users in the network has to tell, and how we from these experiences can
                            continue to build the Dynamic Network as a community owned network. This could include things such as building dApps, integrate
                            DNT into other projects or continue research. This is all for the community to decide!
                            <br/><br/>
                            Nothing in this world is completely perfect. Therefore we believe in a continuous journey for the Dynamic Network.
                            This journey we believe will be filled with new tasks and a never ending strive towards becoming better. This will,
                            as been stated, come from within the community itself.
                            <br/><br/>
                            Now we are eager to hear from you, the community, and what ideas you can bring to the Dynamic Network. Together
                            we can build a a network with the abilities to disrupt the current financial paradigm!
                            </p></div>

                </div>

           
            <div class="logo-container">
            <div class="copyright-dnt">
            The Dynamic Network Project. All Rights Reserved ©
            </div>
            <div class="logo">
                <a href="https://discord.gg/2d7PNevWJv">
                    <img src={discord} alt="Discord"/>
                </a>
            </div>

            <div class="logo">
                <a href="https://twitter.com/DynamicN3twork">
                    <img src={twitter} alt="Twitter" /></a>
            </div>
            <div class="logo">
                <a href="https://dynamic-network.medium.com/">
                    <img src={medium} alt="Medium"/>
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
    </div>
    
  );
}

export default About;
