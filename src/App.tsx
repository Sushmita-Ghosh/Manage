import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(true);
  return (
    <div className="min-h-screen  dark:bg-gray-950">
      <Header setDark={setDark} dark={dark} />
      <GameBoard />
    </div>
  );
}

export default App;
