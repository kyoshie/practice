'use client'

import LikeCounter from "@/components/like-counter";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  const username = "Albert"
  
  const handleLike = (): void => {
    setCount(count + 1)
  }


  return (
    <div className="min-h-screen flex flex-row gap-10 items-center justify-center bg-gray-50 p-6">
      <LikeCounter 
        username={username}
        count={count}
        onLike={handleLike}
      />
    </div>
  );
}
