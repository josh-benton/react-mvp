import React, { useState, useEffect } from "react";

function Quote() {
  const [quotes, setQuotes] = useState([]);

  async function fetchQuote() {
    try {
      const response = await fetch("http://localhost:3000/api/quotes");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setQuotes(data);
    } catch (error) {
      console.log("There was a problem with the fetch operation:", error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  if (quotes.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {console.log(quotes)}
      {quotes.map((quote) => (
        <p key={quote.id}>{quote.quote}</p>
      ))}
    </div>
  );
}

export default Quote;
