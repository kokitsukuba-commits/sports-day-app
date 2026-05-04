'use server'

import { db } from "@/lib/firebase"; // Firebaseの初期化設定
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

// パスコードチェック関数
const checkPasscode = (input: string) => {
  return input === process.env.ADMIN_PASSCODE;
};

// 1. 待ち時間を更新する処理
export async function updateWaitTimeAction(eventId: string, newTime: string, passcode: string) {
  if (!checkPasscode(passcode)) throw new Error("パスコードが間違っています");
  
  const ref = doc(db, "events", eventId);
  await updateDoc(ref, { waitTime: newTime });
  return { success: true };
}

// 2. 投稿を削除する処理
export async function deletePostAction(postId: string, passcode: string) {
  if (!checkPasscode(passcode)) throw new Error("パスコードが間違っています");
  
  await deleteDoc(doc(db, "posts", postId));
  return { success: true };
}
