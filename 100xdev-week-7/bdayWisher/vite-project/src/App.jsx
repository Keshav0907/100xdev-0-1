import { useState } from "react";
import { Card } from "../components/Card";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "20px", // Adjust margin-top as needed
          marginBottom: "20px",
        }}
      >
        <input
          disabled={disabled}
          placeholder="Enter the name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "200px", // Adjust width as needed
          }}
        />
        <button
          type="button"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => { 
            setOpen(true)
            setDisabled(true)
          }}
        >
          Wish Me.
        </button>
      </div>
      {open ===true ? <Card name={name} />: " "}
    </div>
  );
}

export default App;
