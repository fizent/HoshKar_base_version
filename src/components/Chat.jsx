import { useState, Fragment, useEffect, useRef } from "react";
import { Typography,TextField, Button } from "@mui/material";
import BackBtn from "./BackBtn";
import Footer from "./Footer";
export default function ChatDastyar() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const chatLogRef = useRef(null)
  useEffect(() => {
    if (!window.puter) {
      const script = document.createElement("script");
      script.src = "https://js.puter.com/v2/";
      script.onload = () => console.log("Puter SDK Loaded ✅");
      document.body.appendChild(script);
    }
  }, []);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setMessage("");
    // اضافه کردن پیام کاربر
    setChatLog((prev) => [...prev, { role: "user", text: message }]);

    try {
      const res = await window.puter.ai.chat(message);
      console.log("AI Response:", res);

      // متن داخل res.message.content هست
      const aiMessage = res.message?.content || "بدون پاسخ";

      setChatLog((prev) => [...prev, { role: "assistant", text: aiMessage }]);
    } catch (err) {
      console.error("Chat error:", err);
      setChatLog((prev) => [
        ...prev,
        { role: "assistant", text: "خطا در دریافت  دوباره امتحان کن" },
      ]);
    }

  };

  useEffect(() => {
      if (chatLogRef.current) {
        chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight; // اصلاح خطا
      }
  }, [chatLog]);

  return (
  <div>
    <BackBtn/>
    <div className="mg-100"></div>
    <div className="chat_log" ref={chatLogRef}>
      <div className="card_Ai">
        <ten id="helper">سلام خوش امدید من راهنما هستم</ten>
        <br />
        در صورت چت اول پیام رو بفرستید کارها به صورت اتومات انجام میشود و اگر دکمه ای دیدید در اخر روی ان کلیک کنید و حالا کار تمومه!
        <br />
        در صورت انجام نشدن به اپ تحت وب/سایت  بروید لینک زیر را در کروم کپی کنید و وارد نسخه وب شوید و دوباره یک پیام چت بدهید و به صورت اتوماتیک (puter.js) برای شما باز میشود ثبت نام کنید و کار حله
        <br />
        <div className="back_link">
          <Button
            id="link"
            onClick={()=> {
              navigator.clipboard
                .writeText("https://hosh-kar-base-version-sspc.vercel.app/")
            }}
          >
            کپی لینک وب
          </Button>
        </div>

      </div>
      {chatLog.map((c, i) => (
        <div
          key={i}
          className={c.role === "user" ? "card_Aiu" : "card_Ai"}
        >
          <Typography variant="h6">{c.text}</Typography>
        </div>
      ))}
    </div>

    <div className="chat-input-container">
      <TextField
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="بعد از ظهر چی کارکنم؟"
      />
      <Button className="chat-send-btn" onClick={sendMessage}>
        ارسال
      </Button>
    </div>
    <Footer></Footer>
  </div>
  );
}


