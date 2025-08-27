// // diaryDB.js
import { openDB } from "idb";
const DB_NAME = "HistoryDB"
const STORE_NAME = "Moment"

export async function initDB() {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        });
      }
    },
  });
}


export async function addMomnet({ title, text, image, date, color, hour }) {
  try {
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    // بررسی و تبدیل تاریخ به فرمت ISO
    let validDate = new Date().toISOString(); // تاریخ پیش‌فرض
    if (date) {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate)) { // بررسی اینکه تاریخ معتبر است
        validDate = parsedDate.toISOString();
      }
    }
    await tx.store.add({
      title,
      text,
      image,
      date: validDate,
      color,
      hour: hour || new Date().toLocaleTimeString('fa-IR'),
      createdAt: new Date().toISOString(),
    });
    await tx.done;

    try {
      const audio = new Audio("/BubbleEF.wav");
      await audio.play()
    }catch (error) {
      console.warn("Error playing add sound:", error);
    }
  } catch (error) {
    console.error("خطا در ذخیره‌سازی در IndexedDB:", error);
    throw error;
  }
}


export async function getAllMoment() {
   const db = await initDB()
   return await db.getAll(STORE_NAME) 
}

export async function deleteMoment(id) {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
  try {
    const audio = new Audio("/RemoveEf.mp3");
    await audio.play()
  }catch (error) {
    console.warn("Error playing add sound:", error);
  }
  
}


async function requestPersistentStorage() {
  if (navigator.storage && navigator.storage.persist) {
    const isPersisted = await navigator.storage.persisted();
    if (!isPersisted) {
      const result = await navigator.storage.persist();
      console.log(`ذخیره‌سازی دائمی فعال شد: ${result}`);
    } else {
      console.log("ذخیره‌سازی دائمی قبلاً فعال است.");
    }
  }
}

// فراخوانی در هنگام شروع برنامه
requestPersistentStorage();