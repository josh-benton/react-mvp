import React, { useState, useEffect } from "react";
import axios from "axios";

function Quote() {
  const [quotes, setQuotes] = useState([]);

  function fetchQuote() {
    fetch('http://localhost:3000/api/quotes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setQuotes(data);
      })
      .catch(error => {
        console.log('There was a problem with the fetch operation:', error);
      });
  }
  

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      {console.log(quotes)}
      {quotes.map((quote) => (
        <p key={quote.id}>{quote.text}</p>
      ))}
    </div>
  );
}

export default Quote;
