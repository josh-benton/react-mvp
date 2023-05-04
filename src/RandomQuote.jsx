import React, { useState } from "react";

function RandomQuote({ quotes }) {
  const [quote, setQuote] = useState("");

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex].quote;
    setQuote(randomQuote);
  }

  return (
    <div>
      <h2>Random Quote:</h2>
      <p>{quote}</p>
      <button onClick={handleClick}>Get Random Quote</button>
    </div>
  );
}

export default RandomQuote;













// function RandomQuote(props) {
//   const [quotes, setQuotes] = useState([]);
//   const [randomQuote, setRandomQuote] = useState("");

//   async function fetchQuote() {
//     try {
//       const response = await fetch("http://localhost:3000/api/quotes");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       console.log(data);
//       setQuotes(data);
//     } catch (error) {
//       console.log("There was a problem with the fetch operation:", error);
//     }
//   }

//   useEffect(() => {
//     fetchQuote();
//   }, []);

//   useEffect(() => {
//     if (quotes.length > 0) {
//       const randomIndex = Math.floor(Math.random() * quotes.length);
//       setRandomQuote(quotes[randomIndex].quote);
//     }
//   }, [quotes]);

//   if (randomQuote === "") {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <p>{randomQuote}</p>
//     </div>
//   );
// }

// export default RandomQuote;
