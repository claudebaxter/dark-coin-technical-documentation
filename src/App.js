import './App.css';

function App() {
  return (
    
    <div className="App">
      <div className="nav-container">
        <div className="navbar">
          <h1>Navbar Content</h1>
          <img className="icon1" src="/Icon-old.png"></img>
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
          <img className="icon2" src="/Icon-new.png"></img>
          <h1 className="title">Dark Coin Technical Documentation</h1>
          <div className="trianglebottom"></div>
      </div>
      
      
    </div>
  );
}

export default App;
