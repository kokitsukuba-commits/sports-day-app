'use client'
import { useState } from 'react';

export default function AdminActionForm({ 
  onExecute, 
  buttonText 
}: { 
  onExecute: (passcode: string) => Promise<void>;
  buttonText: string;
}) {
  const [passcode, setPasscode] = useState("");

  const handleClick = async () => {
    try {
      await onExecute(passcode);
      alert("成功しました！");
    } catch (e) {
      alert("エラー: パスコードが違うか、問題が発生しました");
    }
  };

  return (
    <div className="admin-form">
      <input 
        type="password" 
        placeholder="管理者パスコード" 
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
      />
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
