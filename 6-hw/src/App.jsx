import './App.css'
import Nav from './components/Nav'
import Home from "./pages/Home.jsx"
import Download from "./pages/Download"
import Expert from "./pages/Expert"
import Lessons from "./pages/Lessons"
import Premium from "./pages/Premium"
import All from "./pages/All";
import Arifmetic from "./pages/Arifmetic";
import Algebra from "./pages/Algebra";
import Geometry from "./pages/Geometry";
import {Routes, Route} from "react-router-dom";

function App() {


  console.log("hello")


  return (
    <>
      <Nav/> 


      <Routes>
        <Route path="/download" element={<Download/>} />
        <Route path="/expert" element={<Expert/>}>
          <Route path="/expert/all/" element={<All/>}/>
          <Route path="/expert/arifmetic/" element={<Arifmetic/>}/>
          <Route path="/expert/algebra/" element={<Algebra/>}/>
          <Route path="/expert/geometry/" element={<Geometry/>}/>
        </Route>
        <Route path="/lessons" element={<Lessons/>} />
        <Route path="/premium" element={<Premium/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
