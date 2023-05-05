import React, { useState } from "react";

function PostQuote() {
  const [quote, setQuote] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
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
    } catch (error) {
      console.log("There was a problem with the fetch operation:", error);
    }
  }

  function handleChange(event) {
    setQuote(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Add a new quote" value={quote} onChange={handleChange} />
        </label>
        <button className="post-quote-btn" type="submit">Add Quote</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default PostQuote;


