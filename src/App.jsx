import { useEffect } from "react";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { initializeAnimation } from "./utils/animations";
import {library} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

library.add(fas,fab);

const App = () => {
useEffect(()=>{
  window.onbeforeunload=()=>{
window.scrollTo(0,0);
  };
},[])

      useEffect(() => {
        initializeAnimation();
      }, []);


  return (
    <div className="scroll-smooth">
      <Navbar/>
      <Home/>   
    </div>
  )
}

export default App
