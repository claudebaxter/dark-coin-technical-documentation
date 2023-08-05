import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Darkpaper from './components/Darkpaper';

function App() {
  const [activeComponent, setActiveComponent] = useState('Home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <Home />;
      case 'Roadmap':
        return <Roadmap />;
      case 'Darkpaper':
        return <Darkpaper />;
      default:
        return null;
    }
  };

  const handleNavButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    
    <div className="App">
      <div className="nav-container">
        <div className="navbar">
          <h1>Navbar Content</h1>
          <img className="icon1" src="/Icon-old.png"></img>
          <div className="navbutton" onClick={() => handleNavButtonClick('Home')}>
            <img className="navicon" src="/Icon-old.png"></img> <p>Home</p>
          </div>
          <div className="navbutton" onClick={() => handleNavButtonClick('Roadmap')}>
            <img className="navicon" src="/roadmap.png"></img> <p>roadMap</p>
          </div>
          <div className="navbutton" onClick={() => handleNavButtonClick('Darkpaper')}>
            <img className="navicon" src="/DarkPaper.png"></img> <p>darkPaper</p>
          </div>
          <a href="https://github.com/elborracho420/Dark-Coin-ASA-1088771340">
            <div className="navbutton">
              <img className="navicon-repo" src="/DarkRepo.png"></img> <p>darkRepo</p>
            </div>
          </a>
          <a href="https://dark-coin.com">
            <div className="navbutton">
              <img className="navicon" src="/Icon-new.png"></img> <p>App</p>
            </div>
          </a>
          <div className="soc-container">
            <a href="https://discord.gg/xdZ6V5ybmq">
              <img className="socials" src="/discord-icon.png"></img>
            </a>
            <a href="https://vestige.fi/asset/1088771340">
              <img className="socials" src="/vestige-icon.png"></img>
            </a>
            <a href="mailto:team@dark-coin.io">
              <img className="socials" src="/email-icon.png"></img>
            </a>
            <a href="https://www.linkedin.com/company/dark-coin-dao/">
              <img className="socials" src="/linkedin-icon.png"></img>
            </a>
          </div>
          <div className="soc-container2">
            <a href="https://www.reddit.com/r/DarkCoinASA/">
              <img className="socials" src="/reddit-icon.png"></img>
            </a>
            <a href="https://twitter.com/DarkCoinASA">
              <img className="socials" src="/twitter-icon.png"></img>
            </a>
            <a href="https://github.com/ToysToTinkerWith/DarkCoin">
              <img className="socials" src="/github-icon.png"></img>
            </a>
            <a href="https://www.youtube.com/watch?v=o-YBDTqX_ZU">
              <img className="socials" src="/youtube-icon.png"></img>
            </a>  
          </div>
        </div>
      </div>
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;
