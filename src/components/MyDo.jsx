import { Fragment, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import BackBtn from "./BackBtn";
import Footer from "./Footer";
import { Inform } from "./Store/Store";
import CheckIcon from '@mui/icons-material/Check';

export default function MyDo() {
    const todos = Inform((state) => state.todos);
    const GoodDone = Inform((state)=> state.GoodDone)
    function GoodDoneHandle(id) {
      GoodDone(id)
    }


    return(
        <Fragment>
            <BackBtn></BackBtn>
            <div className="container_orginall_page container_text_page">
                <Typography className="padding_text" variant="h1">در حال انجام</Typography>
                <div className="todo-container">{todos.map((todo)=>(
                    <div className="todo-card back_do" key={todo.id}>
                        <div>
                            <Typography className="text_start">{todo.text}</Typography>
                            <div className="todo-info">
                                <Typography className="todo-date">{todo.date || "تاریخ نداری"}</Typography>
                                <Typography id="line_padding_left" className="todo-date">{todo.hour || "ساعت نداری"}</Typography>
                            </div>
                        </div>
                        <CheckIcon className="m-icon"  style={{ color: todo.done ? "green" : "gray" }} onClick={()=> GoodDoneHandle(todo.id)}></CheckIcon>
                    </div>
                ))}</div>

            </div>
            <Footer></Footer>

        </Fragment>
    )
}