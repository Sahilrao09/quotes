import { useEffect, useState } from "react";
import "./App.css";

function setRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function newQuote() {
    setQuote(setRandomQuote(quotes));
  }

  return (
    <main>
      <h1>Quote generator</h1>
      <section>
        <button onClick={newQuote}>Click me</button>
        <h3>
          <span>"</span>
          {quote?.text}
          <span>"</span>
          <br />
          <i>-&gt;{quote?.author}</i>
        </h3>
      </section>
    </main>
  );

  // return (
  //   <div>
  //     <h1>quote gen</h1>
  //   </div>
  // );
}

export default App;
