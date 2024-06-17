import { useState } from "react";
import "./App.css";
import "./index.css"

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className={`app-container ${backgroundColor}`}>
      <Button titleColor="Purple" onClick={() => handleColorChange("purple")}></Button>
      <Button titleColor="Red" onClick={() => handleColorChange("red")}></Button>
      <Button titleColor="Yellow" onClick={() => handleColorChange("yellow")}></Button>
      <Button titleColor="Black" onClick={() => handleColorChange("black")}></Button>
      <Button titleColor="Green" onClick={() => handleColorChange("green")}></Button>
      <Button titleColor="Blue" onClick={() => handleColorChange("blue")}></Button>
    </div>
  );
}

function Button({ titleColor, onClick }) {
  return <button style={{ backgroundColor: titleColor, padding: 10, margin: 5, color: "silver" }} onClick={onClick}> {titleColor} </button>;
}

export default App;
