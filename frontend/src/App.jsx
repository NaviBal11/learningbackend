import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// const baseUrl = import.meta.env.VITE_BASEURL;

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/jokes`)
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to frontend</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
