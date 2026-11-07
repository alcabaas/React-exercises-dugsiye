import { useState } from "react";

const App = () => {
  const [Ison, setIson] = useState(false);
  const change = () => {
    setIson(!Ison);
  };

  return (
    <div>
      
      <h2>{Ison ? "light is on" : "light is off"}</h2>
      <button onClick={change}>{Ison ? "trun of " : "trun on"}</button>
    </div>
  );
};
export default App;
