import '../index.css';
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import {FaDollarSign} from "react-icons/fa";


function App() {


 const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);  
    if(isActive){
        document.getElementById("myDropdown").style.display = "block"; 
    }
    else{
        document.getElementById("myDropdown").style.display = "none"; 

    }
};

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        document.getElementById("myDropdown").style.display = "none"; 
  }};

  return (
   
    <nav class="nav">
        <ul>
            <img src="https://www.dynamicnetworktoken.com/static/media/logotyp.c595c5e8.png" alt="=("/>
            <h2 id="nav-title">Dynamic Network</h2>     
            <li>
                <a href="/" data-link>
                    Home
                </a>
            </li>
            <li>
                <a href="/tokenomics" data-link>
                    Tokenomics
                </a>
            </li>       
            <li>
                <a href="/about" data-link>
                    About
                </a>
            </li>
            <li>
                <a href="/team" data-link>
                    Team
                </a>
            </li>
            <li>
               <div class="dropdown">
                    <button onClick={handleToggle} class="dropbtn">Docs <FaCaretDown/></button>
                    <div id="myDropdown" class="dropdown-content">
                        <a href="https://docs.google.com/document/d/e/2PACX-1vQzA6xMEXmCYq4tD0ME-t24BBj4bDVx14lvL1oj3MHpDKb41DIdfwvhR79NxmrKXtpKzVVME1VxGjrj/pub">Whitepaper</a>
                        <a href="https://docs.google.com/document/d/e/2PACX-1vTLgagJ4YEUFDJajGyl3SYT9tbbfLIvdq8e8Bj7qsK3IqAgdk0KUlK8b6LD_ejYawL6gdL91a4F-Hgq/pub">Burning & Minting</a>
                        <a href="https://github.com/Dynamic-Network">Github</a>
                    </div>
            </div> 
            </li>   
            <li>
                <a href="/contact" data-link>
                    Contact Us
                </a>
            </li>
            <li>
                <button id="nav-btn">
                <a href="https://app.uniswap.org/#/swap?inputCurrency=0x86632544e69c8019babd01be75393f9c2d46ee70&outputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&chain=mainnet">
                    Buy&nbsp;<FaDollarSign/>DNT
                </a>
                </button>
            </li>
        </ul> 
    </nav>

  );
  
}



export default App;