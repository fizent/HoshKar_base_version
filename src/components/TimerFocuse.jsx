import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Footer from "./Footer";
import BackBtn from "./BackBtn";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import BoxTimer from "./BoxSTimer";
import Eye from "./Eye";
import { Inform } from "./Store/Store";
import BoxTimerB from "./BoxSTimer";
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const [totalInitial, setTotalInitial] = useState(1);

  const GetHourTimer = Inform((state)=> state.GetHourTimer)
  const GetMinTimer = Inform((state)=> state.GetMinTimer)
  const GetSecondTimer = Inform((state)=> state.GetSecondTimer)

  const setHourTimer = Inform((state)=> state.setHourTimer)
  const setMinTimer = Inform((state)=> state.setMinTimer)
  const setSecondTimer = Inform((state)=> state.setSecondTimer)

  const setTextShowAgree = Inform((state)=> state.setTextShowAgree)
  const formatTime = (h, m, s) => {
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(s)} : ${pad(m)} : ${pad(h)}`;
  };

  const HandleStart = () => {
    const h = parseInt(GetHourTimer) || 0;
    const m = parseInt(GetMinTimer) || 0;
    const s = parseInt(GetSecondTimer) || 0;

    const total = h * 3600 + m * 60 + s;
    if (total <= 0) return;

    setHour(h);
    setMinute(m);
    setSeconds(s);
    setTotalInitial(total);
    setIsRunning(true);
    setShowEye(true);
  };

  // ⏱️ تایمر شمارش معکوس
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSec) => {
          if (prevSec > 0) return prevSec - 1;

          if (minute > 0) {
            setMinute((m) => m - 1);
            return 59;
          }

          if (hour > 0) {
            setHour((h) => h - 1);
            setMinute(59);
            return 59;
          }

          return 0;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, hour, minute]);

  // 🧠 وقتی تایمر صفر شد این useEffect اجرا میشه
  useEffect(() => {
    if (isRunning && hour === 0 && minute === 0 && seconds === 0) {
      setIsRunning(false);
      setShowEye(false);
      setTextShowAgree("پیروزی")   

    }
  }, [seconds, minute, hour, isRunning]);

  useEffect(()=> {
    const handleVisible = ()=> {

      if(document.visibilityState === "hidden") {
        if(isRunning) {
          setIsRunning(false)
          setShowEye(false)
          setTextShowAgree("شکست");
        }
        
      } else {
        console.log("Good Programming!");
        
      }
    }

    document.addEventListener("visibilitychange", handleVisible)
    return ()=> {
      document.removeEventListener("visibilitychange", handleVisible)
    }
  })

  return (
    <div className="timer-wrapper">
      <BackBtn />

      <div className="progress-container">
        <CircularProgressbar
          className="progress-circle"
          value={
            100 -
            (((hour * 3600 + minute * 60 + seconds) / totalInitial) * 100 || 0)
          }
          text={formatTime(hour, minute, seconds)}
          styles={buildStyles({
            pathColor: "#1976d2",
            textColor: "#1976d2",
            trailColor: "#e0e0e0",
            textSize: "13px",
            strokeLinecap: "round",
          })}
        />
      </div>

      {showEye ? (
        <Eye />
      ) : (
        <>
          <div className="input-row">
            <TextField
              label="ساعت"
              type="number"
              value={GetHourTimer}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value <= 60) setHourTimer(e.target.value);
              }}
              variant="outlined"
            />
            <TextField
              label="دقیقه"
              type="number"
              value={GetMinTimer}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value <= 60) setMinTimer(e.target.value);
              }}
              variant="outlined"
            />
            <TextField
              label="ثانیه"
              type="number"
              value={GetSecondTimer}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value <= 60) setSecondTimer(e.target.value);
              }}
              variant="outlined"
            />
          </div>

          <div className="start-btn-container">
            <Button variant="contained" color="primary" onClick={HandleStart}>
              شروع تایمر
            </Button>
          </div>
          <BoxTimerB />
        </>
      )}


      <Footer />
    </div>
  );
}
