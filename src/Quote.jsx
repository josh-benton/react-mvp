import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');

  function fetchQuote() {
    fetch('http://localhost:3000/api/quotes')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      });
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <p>{quote}</p>
      <button onClick={() => fetchQuote()}>New Quote</button>
    </div>
  );
}

export default Quote;
