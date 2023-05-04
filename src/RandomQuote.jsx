import React, { useState } from "react";
import DeleteQuote from "./DeleteQuote";

function RandomQuote({ quotes }) {
  const [quote, setQuote] = useState("");
  const [id, setId] = useState("");

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].quote;
    const randomId = quotes[randomIndex].id;
    setQuote(randomQuote);
    setId(randomId);
  }

  return (
    <div>
      <h2>Random Quote:</h2>
      <p>{quote}</p>
      <button className="random-button" onClick={handleClick}>
        Get Random Quote
      </button>
      {id && <DeleteQuote id={id} />}
    </div>
  );
}

export default RandomQuote;
