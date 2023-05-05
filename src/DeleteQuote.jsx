import React from "react";

export default function DeleteQuote({ id, handleDeleteClick }) {
  async function handleDelete() {
    try {
      const response = await fetch(`http://localhost:3000/api/quotes/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      handleDeleteClick();
    } catch (error) {
      console.log("There was a problem with the fetch operation:", error);
    }
  }

  return <button className="delete-quote-btn" onClick={handleDelete}>Delete Quote</button>;
}

