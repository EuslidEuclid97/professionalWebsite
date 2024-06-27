
import Main from "./components/Main"
import Card from "./components/Card";
import ComingSoon from "./components/ComingSoon"
import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom";

export default function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/comingSoon" element={<ComingSoon/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/projects" element={<div>Projects here</div>}/>
      <Route path="/resume" element={<div>Resume here</div>}/>
      <Route path="/embedded_game" element={<div>Coming soon!</div>}></Route>
      <Route path="/email" element={<div></div>}/>
    </Routes>
    </>
  )
}