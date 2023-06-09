import React, { useState, useEffect } from "react";
import RandomQuote from "./RandomQuote";
import PostQuote from "./PostQuote";

export default function QuotesList() {
  const [quotes, setQuotes] = useState([]);

  async function fetchQuotes() {
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
    fetchQuotes();
  }, []);

  function handleDelete(id) {
    const updatedQuotes = quotes.filter((quote) => quote.id !== id);
    setQuotes(updatedQuotes);
  }

  function handleNewQuote(newQuote) {
    setQuotes([...quotes, newQuote]);
  }

  return (
    <div>
      <RandomQuote quotes={quotes} handleDelete={handleDelete} />
      <PostQuote handleNewQuote={handleNewQuote} />
    </div>
  );
}
