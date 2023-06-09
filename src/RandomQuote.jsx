import React, { useState } from "react";
import DeleteQuote from "./DeleteQuote";

function RandomQuote({ quotes, handleDelete }) {
  const [quote, setQuote] = useState("");
  const [id, setId] = useState("");

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].quote;
    const randomId = quotes[randomIndex].id;
    setQuote(randomQuote);
    setId(randomId);
  }

  function handleDeleteClick() {
    handleDelete(id);
    setId("");
    setQuote("");
  }

  return (
    <div>
      <p className="quote-text">{quote}</p>
      <div className="random-quote-container">
        <button className="random-button" onClick={handleClick}>
          Get Random Quote
        </button>
        {id && <DeleteQuote id={id} handleDeleteClick={handleDeleteClick} />}
      </div>
    </div>
  );
}

export default RandomQuote;

