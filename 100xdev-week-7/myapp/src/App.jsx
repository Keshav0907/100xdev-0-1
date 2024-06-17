import { useState } from "react";
import "./App.css";

function App() {
  const words = [
    "apple", "banana", "orange", "grape", "pineapple",
    "carrot", "potato", "broccoli", "tomato", "lettuce",
    "dog", "cat", "bird", "fish", "rabbit",
    "chair", "table", "sofa", "bed", "lamp",
    "book", "pen", "pencil", "notebook", "eraser"
    // Add more words as needed
  ];
  
  // Function to generate a random integer between min (inclusive) and max (exclusive)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  

  function generateRandomWordsArray(wordsArray, count) {
    const randomWords = [];
    const wordsCount = wordsArray.length;
    if(count > 200) count = 200;
    for (let i = 0; i < count; i++) {
      const randomIndex = getRandomInt(0, wordsCount);
      randomWords.push(wordsArray[randomIndex]);
    }
    return randomWords;
  }
  return (
    <div className="container">
      <h1> Paragraph generator! </h1>
      <MainDiv magicFunction = {generateRandomWordsArray} words={words} />
    </div>
  );
}




function MainDiv({ magicFunction, words }) {
  const [inputNumber, setInputNumber] = useState("");
  const [paragraph, setParagraph] = useState("");

  function handleClick() {
    if (inputNumber === "0") {
      throw new Error("Input is zero");
    } else {
      const count = parseInt(inputNumber);
      const para = magicFunction(words, count);
      setParagraph(para.join(" "));
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="number"
        placeholder="Enter number of words you want to generate"
        style={{ width: '300px', padding: '5px', marginBottom: '10px' }}
        value={inputNumber}
        onChange={(e) => {
          setInputNumber(e.target.value);
        }}
      />
      <button
        style={{
          padding: '10px 20px',
          marginBottom: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={handleClick}
      >
        Generate
      </button>
      <div style={{ margin: '5px', fontSize: '18px', color: '#333' }}>{paragraph}</div>
    </div>
  );
}


export default App;
