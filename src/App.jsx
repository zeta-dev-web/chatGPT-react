import { detalleCard } from "./data/info";
import { useState } from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import Navbar from "./components/Navbar";
import CardApp from "./components/CardApp";

function App() {
  const [darkMode, setDarkMode]=useState(false)
  const changeMode=()=>{
setDarkMode(!darkMode)
  }
  return (
    <div className={darkMode ? "bg-dark" : ""}>
      <Navbar darkMode={darkMode} changeMode={changeMode}/>
      <Carousel />
      <div className="container">
        <div className="row mt-5 pb-5">
          {detalleCard.map((item, index) => (
            <CardApp key={index} item={item} darkMode={darkMode}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
