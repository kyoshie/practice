'use client';

import CounterDisplay from "@/components/counter-display";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  
  function increase() {
    setCount(count + 1)
  }

  function reset() {
    setCount(0)
  }

    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <CounterDisplay
      count={count}
      onIncrease={increase}
      onReset={reset}      
      />
    
    </div>
  );
}
