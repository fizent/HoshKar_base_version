import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import { Inform } from "./Store/Store";
export default function BoxTimerB() {
    const GetHourTimer = Inform((state)=> state.GetHourTimer)
    const GetMinTimer = Inform((state)=> state.GetMinTimer)
    const GetSecondTimer = Inform((state)=> state.GetSecondTimer)
    const GetTextShowAgree = Inform((state)=> state.GetTextShowAgree)

    const getColor = ()=> {
      if(GetTextShowAgree === "پیروزی") return "green";
      if(GetTextShowAgree === "شکست") return "red";
    }
    return (
      <Fragment>
          <div className="todo-card bgcolor display_todo_timer">
            <Typography variant="h3" className="center_text">آمار تمرکز شما</Typography>
          </div>


          <div className="container_boxs_timer">
            <div className="boxs_Info_timer todo-card bgcolor">
                <Typography variant="h3" className="color_tak_box">{GetHourTimer || "0"}</Typography>
                <Typography variant="h6">ساعت</Typography>
            </div>
            <div className="boxs_Info_timer todo-card bgcolor">
              <Typography variant="h3" className="color_tak_box1">{GetMinTimer || "0"}</Typography>
              <Typography variant="h6">دقیقه</Typography>
            </div>
            <div className="boxs_Info_timer todo-card bgcolor">
              <Typography variant="h3" className="color_tak_box2">{GetSecondTimer || "0"}</Typography>
              <Typography variant="h6">ثانیه</Typography>
            </div>
          </div>
          <div className="todo-card bgcolor text_boxsTime margin_last_page">
            <Typography variant="h3" style={{color: getColor()}}>{GetTextShowAgree  || "?"}</Typography>
          </div>
      </Fragment>
    );
}
