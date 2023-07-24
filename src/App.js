import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import TestHTTP from "./utils/httpTest";

function App() {
  const [data, setData] = useState();

  const makeRequest = async () => {
    const data = await TestHTTP();
    setData(data);
  };

  return (
    <div className="App">
      <p>{data.todo}</p>
    </div>
  );
}

export default App;
