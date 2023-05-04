import React, { useState, useEffect } from "react";

function RandomQuote() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");

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

  useEffect(() => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex].quote);
    }
  }, [quotes]);

  if (randomQuote === "") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{randomQuote}</p>
    </div>
  );
}

export default RandomQuote;
