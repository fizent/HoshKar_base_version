import { useEffect } from "react";
import { Inform } from "./Store/Store";

const musics = ["/BubbleEF.wav", "/BubbleEffect.mp3"];

export default function ReminderPage() {
  const show = Inform((s) => s.showReminderPage);
  const todo = Inform((s) => s.activeReminder);
  const setShow = Inform((s) => s.setShowReminderPage);

  useEffect(() => {
    if (show && todo) {
      const random = musics[Math.floor(Math.random() * musics.length)];
      try {
        const audio = new Audio(random);
        audio.play();
      } catch (error) {
        console.warn("Audio play failed", error);
      }
    }
  }, [show, todo]);

  if (!show || !todo) return null;

  return (
    <div className="reminder-overlay">
      <div className="reminder-box">
        <h2>⏰ زمان "{todo.text}" رسیده!</h2>
        <button onClick={() => setShow(false)}>بستن</button>
      </div>
    </div>
  );
}
