import React, { useState } from "react";
import RandomQuote from "./RandomQuote";
import QuotesList from "./QuotesList";

import "./App.css";
import PostQuote from "../PostQuote";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      <QuotesList handleLoading={handleLoading} />
      {!isLoading && <RandomQuote />}
      <PostQuote />
    </div>
  );
}

export default App;
