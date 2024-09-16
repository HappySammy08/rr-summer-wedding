import { useState, useEffect } from "react";
import "./App.css";

import Vailery from "../src/assets/fonts/Vailery.ttf";

// Pages
import Large from "./pages/Large";
import Small from "./pages/Small";
function App() {
  // Custom styles for the DatePicker
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <div className="App">{isMobile ? <Small /> : <Large />}</div>;
}

export default App;
