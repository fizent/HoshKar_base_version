import Paper from "@mui/material/Paper";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Inform } from "./Store/Store";
export default function Hour({onDone}) {
  const [hour, setHour] = useState("02");
  const [minute, setMinute] = useState("30");
  const setHours = Inform((state)=> state.setHours)

  function ClickHandleDo() {
    setHours(AllTime)
    onDone()
  }
  const HandleHour = (e) => {
    let val = e.target.value.replace(/\D/g, ""); // فقط عدد
    if (val.length > 2) {
      val = val.slice(0, 2);
    }
    if (Number(val) > 23) {
      val = "23";
    }
    setHour(val.padStart(2, "0"));
  };

  const HandleMinute = (e) => {
    let val = e.target.value.replace(/\D/g, ""); // فقط عدد
    if (val.length > 2) {
      val = val.slice(0, 2);
    }
    if (Number(val) > 59) {
      val = "59";
    }
    setMinute(val.padStart(2, "0"));
  };

  const AllTime = `${minute} : ${hour}`
  
  return (
    <div className="container_box_open container_box_time">
      <Typography variant="h4" className="text_hour">
        انتخاب زمان
      </Typography>
      <div className="two_time">
        <TextField
          className="time_box"
          placeholder="ساعت"
          onChange={HandleHour}
          inputProps={{ maxLength: 2 }}
        />
        <div id="iconBetween">:</div>
        <TextField
          className="time_box"
          placeholder="دقیقه"
          onChange={HandleMinute}
          inputProps={{ maxLength: 2 }}
        />
      </div>
      <div className="container_Btn_Hour padding_hour_Button">
        زمان انتخاب‌شده: <strong>{AllTime}</strong>
        <Button variant="contained" onClick={ClickHandleDo}>انجام</Button>
      </div>
    </div>
  );
}
