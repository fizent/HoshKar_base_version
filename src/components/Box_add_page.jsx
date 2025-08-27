import Typography from "@mui/material/Typography";
import { Inform } from "./Store/Store";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';
import Collapse from "@mui/material/Collapse";
import { useState } from "react";


export default function BoxAdd() {
  const RandomGood = [
    "آفرین!",
    "کارت عالی بود!",
    "بهت افتخار می‌کنم.",
    "دمت گرم!",
    "چقدر خوب پیش رفتی!",
    "مرحبا!",
    "خیلی خوب انجامش دادی.",
    "در مسیر درستی هستی.",
    "بهترین خودت بودی.",
    "چقدر پیشرفت کردی!",
    "مثل همیشه عالی.",
    "تو فوق‌العاده‌ای.",
    "موفق شدی!",
    "این بود قدرت واقعی‌ات.",
    "یه قدم جلوتر رفتی.",
    "برنده شدی!",
    "دیدی که تونستی؟",
    "چقدر با اراده‌ای.",
    "تو می‌درخشی.",
    "خیلی تمیز انجام شد.",
    "پیش به سوی هدف بعدی!",
    "کاری که باید رو کردی.",
    "تسلیم نشدی، آفرین.",
    "واقعاً عالی بود.",
    "با قدرت ادامه بده.",
    "کار درستی کردی.",
    "به مسیرت ادامه بده.",
    "همینطوری ادامه بده.",
    "به خودت افتخار کن.",
    "نتیجه زحمت‌هات بود.",
    "تو الهام‌بخشی.",
    "چقدر منظم بودی.",
    "تو از پسش بر اومدی.",
    "یه کار درست دیگه انجام شد.",
    "تو توانمندی.",
    "باورم نمی‌شه اینقدر عالی!",
    "همین راهو ادامه بده.",
    "تو شایسته‌ای.",
    "خیلی قوی ظاهر شدی.",
    "هر روز بهتر می‌شی.",
    "به هدفت نزدیک‌تری.",
    "عالی، مثل همیشه.",
    "حرف نداشت!",
    "به کارت ایمان دارم.",
    "یه کار مفید دیگه ثبت شد.",
    "قوی و باهوش.",
    "تو موفق خواهی شد.",
    "یادگیریت عالیه.",
    "تو یه الگو هستی.",
    "در مسیر پیشرفتی.",
  ];
  const [openAlert, setOpenAlert] = useState(false)
  const todos = Inform((state) => state.todos);
  const removeTodo = Inform((state)=> state.removeTodo)
  const GoodDone = Inform((state)=> state.GoodDone)
  const [AlertText, setAlertText] = useState("")
  function GoodDoneHandle(id) {
    GoodDone(id)
    setOpenAlert(true)
    const RandomNumText = RandomGood[Math.floor(Math.random() * RandomGood.length)]
    setAlertText(RandomNumText)
    setTimeout(() => {
      setOpenAlert(false)
    }, 2000);
  }
  return (
    <div className="todo-container">
      {todos.length > 0 &&
      [...todos].sort((a, b)=> b.id - a.id).map((todo)=>(
          <div
            key={todo.id}
            className="todo-card"
            style={{ backgroundColor: todo.color, color: todo.color ? "#fff" : "#000" }}
          >
            <div>
                <Typography className="todo-text">{todo.text}</Typography>
                <div className="todo-info">
                    <div className="s">
                        <Typography className="todo-date">
                          {todo.date}
                        </Typography>
                    </div>
                    <div className="s">
                        <Typography className="todo-date">
                          {todo.hour}
                        </Typography>
                    </div>
                </div>

            </div>
            <div className="delete-icon">
                <DeleteSweepIcon  className="m-icon" onClick={()=> removeTodo(todo.id)}></DeleteSweepIcon>
                <CheckIcon className="m-icon"  style={{ color: todo.done ? "green" : "gray" }} onClick={()=> GoodDoneHandle(todo.id)}></CheckIcon>
            </div>
          </div>
      ))
    }

    <div className="Alerts">
      <Collapse in={openAlert}> 
        <Alert security="success">{AlertText}</Alert>
      </Collapse>
    </div>
    </div>
  );
}
