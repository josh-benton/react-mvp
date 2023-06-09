import React, { useState } from "react";

function PostQuote({ handleNewQuote }) {
  const [quote, setQuote] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!quote) {
      setErrorMessage("Please enter a quote!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quote }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setQuote("");
      setSuccessMessage("Quote added successfully!");
      handleNewQuote(data);
      setShowForm(false); // Hide the form
    } catch (error) {
      console.log("There was a problem with the fetch operation:", error);
    }
  }

  function handleChange(event) {
    setQuote(event.target.value);
    setErrorMessage("");
  }

  function handlePromptClick() {
    setShowForm(true);
  }

  return (
    <div>
      {!showForm && (
        <p className="add-prompt" onClick={handlePromptClick} style={{ cursor: "pointer" }}>
          Would you like to add a quote?
        </p>
      )}
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Add a new quote"
              value={quote}
              onChange={handleChange}
            />
          </label>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button className="post-quote-btn" type="submit">
            Add Quote
          </button>
        </form>
      )}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default PostQuote;
