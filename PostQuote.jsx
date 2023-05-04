import React, { useState } from "react";

function PostQuote() {
  const [quote, setQuote] = useState("");

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
    } catch (error) {
      console.log("There was a problem with the fetch operation:", error);
    }
  }

  function handleChange(event) {
    setQuote(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Quote:
        <input type="text" value={quote} onChange={handleChange} />
      </label>
      <button type="submit">Add Quote</button>
    </form>
  );
}

export default PostQuote;
