import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
          try {
            const response = await axios.get(
              'https://raw.githubusercontent.com/claudebaxter/Dark-Coin-ASA-1088771340/main/README.md'
            );
            const { data } = response;
            setContent(data);
          } catch (error) {
            console.error('Error fetching home content:', error);
          }
        };
    
        fetchContent();
      }, []);
    
      const renderContent = () => {
        if (content) {
          const lines = content.split('\n');
          const elements = [];
    
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
    
            if (line.startsWith('# ')) {
              const text = line.replace('#', '').trim();
              elements.push(<h1 key={i}>{text}</h1>);
            } else if (line.startsWith('## ')) {
              const text = line.replace('##', '').trim();
              elements.push(<h2 key={i}>{text}</h2>);
            } else if (line.startsWith('- ')) {
              const text = line.replace('- ', '').trim();
              elements.push(<li className="bullet" key={i}>{text}</li>);
            } else {
              elements.push(<p key={i}>{line}</p>);
            }
          }
    
          return elements;
        } else {
          return <p>Loading...</p>;
        }
      };        
    
    return(
        <div className="Home">
            <div className="triangletopdp"></div>
            <img className="icon2" src="/Icon-new.png" alt="Icon" />
            <h1 className="title">Dark Coin Technical Documentation</h1>
            <div className="homep-container">
            {renderContent()}
            </div>
            <div className="trianglebottom"></div>
        </div>
    )
}

export default Home;