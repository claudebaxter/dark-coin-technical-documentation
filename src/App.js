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
          <div className="navbutton">
            <img className="navicon" src="/DarkRepo.png"></img> <p>darkRepo</p>
          </div>
          <div className="navbutton">
            <img className="navicon" src="/Icon-new.png"></img> <p>App</p>
          </div>
          <div className="soc-container">
            <img className="socials" src="/discord-icon.png"></img>
            <img className="socials" src="/vestige-icon.png"></img>
            <img className="socials" src="/email-icon.png"></img>
            <img className="socials" src="/linkedin-icon.png"></img>
          </div>
          <div className="soc-container2">
            <img className="socials" src="/reddit-icon.png"></img>
            <img className="socials" src="/twitter-icon.png"></img>
            <img className="socials" src="/github-icon.png"></img>           
            <img className="socials" src="/youtube-icon.png"></img>
          </div>
        </div>
      </div>
      <div className="content">
          <div className="triangletop"></div>
            {renderComponent()}
          <div className="trianglebottom"></div>
      </div>
    </div>
  );
}

export default App;
