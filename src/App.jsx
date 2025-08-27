import { Fragment, useEffect, useState } from "react"
import {Router, Routes, Route } from "react-router-dom";
import BoxOpen from "./components/BoxOpen";
import "./App.css"
import Hour from "./components/Hour";
import Calender from "./components/Calender";
import MainPage from "./components/MainPage"
import Timer from "./components/TimerFocuse";
import HistoryUser from "./components/HistoryMember";
import MyDo from "./components/MyDo";
import ChatDastyar from "./components/Chat";
import Setting from "./components/Setting";
import Lottie from "lottie-react";
import Typography from "@mui/material/Typography";

export default function App() {
  const [load, setLoad] = useState(true)

  useEffect(()=> {
    const timeout = setTimeout(() => {
      setLoad(false)
    }, 5000);
    return ()=> clearTimeout(timeout)
  })

  if(load) {
    return(
      <div className="loadAnim">
        <Lottie 
            path="/animation/Loading Lottie animation.json" 
            loop={true} 
            autoplay={true} 
            style={{ width: 300, height: 300, margin: "0 auto" }}
        />
        <div>
            <Typography variant="h3" className="center_text">هوشکار</Typography>
            <Typography variant="h6" className="center_text">مدریت هوشمند کارها</Typography>
        </div>        
      </div>

    )
  }
  return(
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/BoxOpen" element={<BoxOpen/>}></Route>
      <Route path="/hour" element={<Hour/>}></Route>
      <Route path="/calender" element={<Calender/>}></Route>
      <Route path="/TimerFocuse" element={<Timer/>}></Route>
      <Route path="/History" element={<HistoryUser/>}></Route>
      <Route path="/MyDo" element={<MyDo/>}></Route>
      <Route path="/Chat" element={<ChatDastyar/>}></Route>
      <Route path="/Setting" element={<Setting />}></Route>

    </Routes>
  )
}