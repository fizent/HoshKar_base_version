import Header from "./Header";
import Typography from "@mui/material/Typography";
import Timer from "./TimerFocuse";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import { styled } from "@mui/material/styles";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Calender from "./Calender";
import Hour from "./Hour";
import BoxOpen from "./BoxOpen";
import BoxAdd from "./Box_add_page";
import Footer from "./Footer";
import ReminderPage from "./RenderNotifeApp";
import { Inform } from "./Store/Store";

export default function MainPage() {
    //// state mangement
    const [open, Setopen] = useState(false)
    const [Icon, setIcon] = useState(<AddIcon />)
    const [activeSection, setActiveSection] = useState(null)
    const addTodo = Inform((state) => state.addTodo);



    // function
    function HandleOpen() {
        Setopen(!open) /// === True
        setIcon(!open ? <DoneIcon /> : <AddIcon />)
        addTodo()
        setActiveSection(null)
    }
    //// styled

    const FabButton = styled(Fab)(({theme})=>({
        backgroundColor: '#1976d2',
        color: "#fff",
        "&:hover": {
            backgroundColor: "#fff",
            color: "#1976d2" 
        }

    }))
        
    return(
        <div className="container_orginall_page">
            <Header></Header>
            <div className="container_text_page">
                <Typography className="padding_text" variant="h1">تموم کن</Typography>
                <Typography variant="subtitle">برنامه ای برای برنامه ریزی و تمرکز</Typography>
            </div>
            {/* <Timer></Timer> */}


            <div className="contain_position_button">
                <FabButton onClick={HandleOpen} className="color_button" aria-label="add">
                    {Icon}
                </FabButton>
            </div>
                {open && (
                    <Fragment>
                        <div className="overly"></div>
                        <BoxOpen title="برنامت رو بچین" desc1="" onSelect={setActiveSection}></BoxOpen>
                        {activeSection === "hour" && <Hour onDone={()=> setActiveSection(null)}/>}
                        {activeSection === "calendar" && <Calender onDone={()=> setActiveSection(null)}/>}
                    </Fragment>
                )}
                {/* <Calender></Calender> */}
                <BoxAdd></BoxAdd>
                <ReminderPage />
            <Footer></Footer>
        </div>
    )
}