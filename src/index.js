import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SplashScreen from './Splash';

function Main() {
  const [splashScreenFinished, setSplashScreenFinished] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setSplashScreenFinished(true);
    }, 6000); // Adjust the duration to match your actual splash screen duration
  }, []);

  return splashScreenFinished ? <App /> : <SplashScreen />;
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
