import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/NikoHamburg/fbwd01linksniko/main/src/data/links.json"
      );
      const data = await response.json();
      setLinks(data);
    })();
  }, []);
  return (
    <div className="App">
      <h1>Links</h1>
      <ul>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a target="_blank" href={link.url} rel="noreferrer">
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
