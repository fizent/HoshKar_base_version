import Paper from "@mui/material/Paper";
import { useState } from "react";
import Calendar from "react-calendar";
import Typography from "@mui/material/Typography";
import "react-calendar/dist/Calendar.css"; // مهم برای استایل پایه
import Button from "@mui/material/Button";
import { Inform } from "./Store/Store";
export default function Calender({onDone}) {
  const [value, setValue] = useState(new Date());
  const setCalender = Inform((state)=> state.setCalender)
  const CalenderGetit = value.toLocaleDateString("fa-IR")

  function ClickHandleDo() {
    setCalender(CalenderGetit)
    onDone()
    
  }
  return (
    <div className="container_box_open container_calender">
      <Paper className="Paper" elevation={6}>
        <Calendar
          className="custom-calendar"
          onChange={setValue}
          value={value}
          locale="fa-IR"
          calendarType="gregory"
        />
      </Paper>
      <div className="container_Btn_Hour">
          <Typography variant="subtitle" className="selected-date">
            تاریخ انتخاب‌شده: {CalenderGetit}
          </Typography>
          <Button variant="contained" onClick={ClickHandleDo}>انجام</Button>
      </div>
    </div>
  );
}
