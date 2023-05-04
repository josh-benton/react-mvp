import React, { useState, useEffect } from "react";
import RandomQuote from "./RandomQuote";

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

  return (
    <div>
      <RandomQuote quotes={quotes} />
    </div>
  );
}
