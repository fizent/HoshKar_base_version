import { useEffect, useState } from "react";
import { addMomnet, getAllMoment, deleteMoment } from "./Store/HistoryDB";
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import { Fragment } from "react";
import Footer from "./Footer";
import BoxHistoryOpen from "./BoxOpenHistory";
import Calender from "./Calender";
import { Inform } from "./Store/Store";
import BoxAddHistory from "./Box_add_history";
import { Alert, Collapse } from "@mui/material";
import BackBtn from "./BackBtn";
import {Typography} from "@mui/material";
export default function HistoryUser() {
  const [moments, setMoments] = useState([]);
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(<AddIcon />);
  const [activeSection, setActiveSection] = useState(null);
  const [snakBar, setSnakBar] = useState(null)
  const [snakBarText, setSnakBarText] = useState("")
  const [emphtyText, setEmphtyText] = useState("هنوز خاطره ای نداری")
  // Zustand states
  const textValue = Inform((state) => state.textValue);
  const setTextValue = Inform((state) => state.setTextValue);
  const ColorInput = Inform((state) => state.ColorInput);
  const setColorInput = Inform((state) => state.setColorInput);
  const GetCalender = Inform((state) => state.GetCalender);
  const setCalender = Inform((state) => state.setCalender);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null); // اصلاح به null به‌جای []

  const loadMoments = async () => {
    const data = await getAllMoment();
    setMoments(data);
  };

  useEffect(() => {
    loadMoments();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      const maxSize = 1 * 1024 * 1024
      if(file.size > maxSize) {
        setSnakBarText("عکس باید کمتر از 1 مگ باشد")
        setSnakBar(true)
        setTimeout(() => {
          setSnakBar(false)
        }, 2000);
        return
      }
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

 

  const handleSubmit = async () => {
    if (!title || !textValue) return;

    await addMomnet({
      title,
      text: textValue,
      image,
      date: GetCalender || new Date().toISOString(),
      color: ColorInput || "#47008a",
      hour: new Date().toLocaleTimeString('fa-IR'),
    });

    setTitle("");
    setTextValue("");
    setImage(null);
    setColorInput("");
    setCalender("");
    setEmphtyText("")
    await loadMoments();
    setOpen(false); // بستن فرم بعد از ذخیره
    setIcon(<AddIcon />); // بازگرداندن آیکون به AddIcon
  };

  const handleDelete = async (id) => {
    await deleteMoment(id);
    await loadMoments();
  };

  function handleOpen() {
    if (open) {
      // اگر باز است، ذخیره کن
      handleSubmit();
    } else {
      // باز کردن فرم
      setOpen(true);
      setIcon(<DoneIcon />);
      setActiveSection(null);
    }
  }

  const FabButton = styled(Fab)(({ theme }) => ({
    backgroundColor: '#1976d2',
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#1976d2",
    },
  }));

  return (
    <Fragment>
      <BackBtn></BackBtn>
      <div className="Type_margin_history">
      </div>
      <div className="contain_position_button">
        <FabButton onClick={handleOpen} className="color_button" aria-label="add">
          {icon}
        </FabButton>
      </div>

      {open && (
        <Fragment>
          <div className="overly"></div>
          <BoxHistoryOpen
            title=""
            desc1=""
            onSelect={setActiveSection}
            setTitle={setTitle}
            titleValue={title}
            handleImageChange={handleImageChange}
            image={image}
          />
          {activeSection === "calendar" && <Calender onDone={() => setActiveSection(null)} />}
        </Fragment>
      )}
      <div className="container_box_history">
        {moments.length === 0 ? (
          <div className="container_text_align">
            <Typography variant="h3">هنوز خاطره ای نداری</Typography>
          </div>
        ) : (
          moments.map((moment) => (
            <BoxAddHistory
              key={moment.id}
              moment={moment}
              onDelete={() => handleDelete(moment.id)}
            />
          ))
        )}
      </div>
      <div className="Alerts">
        <Collapse in={snakBar}> 
          <Alert security="success">{snakBarText}</Alert>
        </Collapse>
      </div>
      <Footer />
    </Fragment>
  );
}