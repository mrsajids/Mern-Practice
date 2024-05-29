import { Routes, Route } from "react-router-dom"
import Home from "./component/Home";
import Contact from "./component/Contact";
import { useState } from "react";
import React from "react";
import Parent from "./fetch/Parent";
import CardandCarousal from "./carousal/CardandCarousal"
import LeftNavbar from "./Navbar/LeftNavbar";
function App() {
  // let flag=true;
  const [name,setName]=useState("");
  let stylevar={backgroundColor:"pink",color:"green"}
  return (
    <>
    {/* {
      (flag)?<h1 style={stylevar}>logined succefully</h1>:<h1>please login</h1>
      } */}
      <LeftNavbar/>
    </>
  );
}

export default App;
