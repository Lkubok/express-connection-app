import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const baseURL = "http://127.0.0.1:5002";

function App() {
  const [banks, setBanks] = useState(null);

  console.log("banks", banks);

  useEffect(() => {
    axios.get(`${baseURL}/institutions`).then((response) => {
      console.log("response", response);
      setBanks(response.data.banks);
    });
  }, []);

  useEffect(() => {
    if (banks) {
      axios.post(`${baseURL}/authorize`, {}).then((response) => {
        console.log("authorize response", response.data);
      });
    }
  }, [banks]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
