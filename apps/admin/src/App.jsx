import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Tablr } from "@lis2-ui/ui/src/components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Admin app</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button />
          <Button />

          <Tablr
            rows={[
              ["A", "B", "C", "D", "E"],
              ["AA", "BB", "CC", "DD", "EE"],
              ["AAA", "BBB", "CCC", "DDD", "EEE"],
              ["AAAA", "BBBB", "CCCC", "DDDD", "EEEE"],
            ]}
            headers={["Col 1", "Col 2", "Col 3", "Col 4", "Col 5"]}
            borderWidth="thick"
            cellPadding="small"
            cellTextColor="black"
            headerTextColor="white"
            cellBorderColor="#747381"
            headerBorderColor="#494866"
            backgroundColor="#a6a5b8"
            headerBackgroundColor="#65647a"
          />

          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
