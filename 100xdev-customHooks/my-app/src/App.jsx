import { useIsOnline } from "./hooks/useIsOnline";
import { useMousePointer } from "./hooks/useMousePointer";
import { useInterval } from "./hooks/useInterval";
import { useDebounce } from "./hooks/useDebounce";
import { useState } from "react";


function App() {
  const mousePointer = useMousePointer();
  const isOnline = useIsOnline();
  const [count, setCount] = useState(0);

  const [value,setValue] = useState("");  
  const debouncedValue = useDebounce(value,500);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)


  return (
    <div>
      <p>{isOnline ? "You are online, yay!" : "You are not online"}</p>
      <p>Your mouse position is {mousePointer.x}, {mousePointer.y}</p>
      <p>Timer is at {count} </p>
      <p>Debounced value is {debouncedValue} </p>
      <input type="text" onChange={e => setValue(e.target.value)}></input>
    </div>
  );
}

export default App;
