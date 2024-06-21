import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/api/jokes`)
      .then((response) => {
        console.log(response.data);
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
