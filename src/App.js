import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  // state of quotes 
  const [quote, setQuote] = useState('');

  // fetch the quotes
  const fetchQuotes = () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then((data) => {
      let randomNumber = Math.floor(Math.random() * data.length);
      setQuote(data[randomNumber]);
    });
  };

  // load qoutes on page load 
  // load once 
  useEffect(() => {
    fetchQuotes(); 
  }, [])

  return (
    <div className="App">
      <div className="quote">
        <p><i>"{quote.text}"</i></p>
        <p> - {!quote.author ? 'Unknown' : quote.author}</p>
        <br/>
        <div className="btnContainer">
          <button onClick={fetchQuotes} className="btn">Get quote</button>
          <a href={`https://twitter.com/intent/tweet?text=${quote.text}`} target="_blank" rel="noopener noreferrer" className="btn">Tweet this</a>
        </div>
      </div>
    </div>
  );
}

export default App;
