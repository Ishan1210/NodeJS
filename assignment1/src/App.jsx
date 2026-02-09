import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleCreate = () => {
    fetch("http://localhost:5000/api/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text })
    })
    .then(res => res.json())
    .then(data => {
      setMessage(data.message || "File created successfully");
      setText("");
    })
    .catch(err => setError(err.message));
  };

  const handleRead = () => {
    fetch("http://localhost:5000/api/read")
    .then(res => res.json())
    .then(data => setDisplayText(data.text || "No file found"))
    .catch(err => setError(err.message));
  };

  useEffect(() => {
  fetch("http://localhost:5000/api/test")
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(() => setError("Backend not connected"));
}, []);


  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Enter text here" 
        />
        <button onClick={handleCreate}>FS create</button>
        <button onClick={handleRead}>FS read</button>
        <div>
            <h3>Output:</h3>
            <p>{displayText}</p>
        </div>
        <h1>FS Model for Node</h1>

        {message && (
          <p style={{ color: "green", fontWeight: "bold" }}>
            {message}
          </p>
        )}

        {error && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            {error}
          </p>
        )}
      </div>
    </>
  );
}

export default App;
