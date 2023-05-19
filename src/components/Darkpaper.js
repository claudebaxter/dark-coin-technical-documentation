import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Darkpaper() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/elborracho420/Dark-Coin-ASA-1088771340/main/darkpaper.md'
        );
        const { data } = response;
        setContent(data);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  const renderContent = () => {
    if (content) {
      const lines = content.split('\n');
      return lines.map((line, index) => {
        if (line.startsWith('#')) {
          // Treat the line as an h1 element
          const text = line.replace('#', '').trim();
          return <h1 key={index}>{text}</h1>;
        } else {
          // Treat the line as a p element
          return <p key={index}>{line}</p>;
        }
      });
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <div>
        <div className="triangletopdp"></div>
        <img className="icon2" src="/Icon-new.png" alt="Icon" />
        <h1 className="title">Dark Coin Darkpaper</h1>
        <div className="darkpaper-container">
        {renderContent()}
        </div>
        <div className="trianglebottom"></div>
    </div>
      
  );
}

export default Darkpaper;
