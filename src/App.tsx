import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (!dark) document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <Header setDark={setDark} dark={dark} />
      <GameBoard />
    </div>
  );
}

export default App;
