import { Fragment, useEffect, useState } from "react";
import { TextField, Button, Typography, Switch, Paper } from "@mui/material";
import BackBtn from "./BackBtn";
import SettingAnimation from "./SettingAni";
export default function Setting() {
    const [privacy, setPrivcy] = useState(()=> JSON.parse(localStorage.getItem("privacy")) || false)
    const [notif, setNotif] = useState(()=> JSON.parse(localStorage.getItem("Notife")) || false)

    useEffect(()=> {
        localStorage.setItem("privacy", JSON.stringify(privacy))
    }, [privacy])

    useEffect(()=> {
        localStorage.setItem("Notife", JSON.stringify(notif))
    }, [notif])
    return(
        <div className="container_orginall_page container_text_page">
            <BackBtn></BackBtn>
            <div>
                <SettingAnimation></SettingAnimation>
            </div>
            
            <div className="container_setting">
                <Paper className="paper_box">
                    <Typography className="" variant="h5">مدریت اعلان</Typography>
                    <Switch checked={notif} onClick={()=> setNotif(!notif)} />
                </Paper>
                
                <Paper className="paper_box">
                    <Typography className="" variant="h5">حریم خصوصی</Typography>
                    <Switch checked={privacy} onClick={()=> setPrivcy(!privacy)} />
                </Paper>
            </div>
                <Paper className="paper_box">
                    <Typography  className="helper">تنظیمات این برنامه بیشتر سمت وب انجام میشوند</Typography>
                </Paper>
        </div>
    )
}