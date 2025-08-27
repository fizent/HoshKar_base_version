import { create } from "zustand";
import { persist } from "zustand/middleware";

export const Inform = create(
    persist(
        (set, get)=> ({
            textValue: "",
            ColorInput: "",
            GetHour: "",
            GetCalender: "",

            GetHourTimer : "",
            GetMinTimer : "",
            GetSecondTimer : "",
            

            GetTextShowAgree:"",
            
            setColorInput: (value)=> set({ColorInput: value}),
            setHours: (value)=> set({GetHour:value}),
            setCalender: (value)=> set({GetCalender:value}),
            setTextValue: (value) => set({textValue: value}),

            setHourTimer : (value)=> set({GetHourTimer: value}),
            setMinTimer : (value)=> set({GetMinTimer: value}),
            setSecondTimer : (value)=> set({GetSecondTimer: value}),
            
            setTextShowAgree: (value)=> set({GetTextShowAgree:value}),

            todos: [],
            addTodo: async ()=> {
                const {textValue, ColorInput, GetCalender, GetHour, todos} = get();
                if (textValue.trim() === "")return;
                const newTodo = {
                    id: Date.now(),
                    text: textValue,
                    color: ColorInput,
                    hour: GetHour,
                    date: GetCalender,
                }

                set({
                    todos:[...todos, newTodo],
                    textValue: "",
                    ColorInput: "",
                    GetHour: "",
                    GetCalender: "",
                });

                try {
                    const audio = new Audio("/BubbleEF.wav")
                    await audio.play()  
                }catch (error) {
                    console.warn("audio have problem", error);
                    
                }

                
            },
            

            removeTodo: (id)=> {
                set((state)=> ({
                    todos: state.todos.filter((todo)=> todo.id !== id)
                }));

                try{
                    const audio = new Audio("/RemoveEf.mp3")
                    audio.play()
                } catch(error) {
                    console.warn("Audio Delet have problem", error)
                }
            },

            GoodDone: (id)=> {
                set((state)=>({
                    todos: state.todos.map((todo)=>(
                        todo.id === id ? {...todo, done: true}: todo
                    ))
                }));
                setTimeout(() => {
                    set((state)=> ({
                        todos: state.todos.filter((todo)=> todo.id !== id)
                    }))
                }, 1000);
                  try {
                     const audio = new Audio("/CorrectEf.wav");
                     audio.play();
                } catch (error) {
                    console.warn("Audio Delete has problem", error);
                }
            }

        }),
        { name: "Inform-storage"}
    )

)