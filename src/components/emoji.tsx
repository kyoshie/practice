'use client'

import { useState } from "react";

export default function Emoji() {
    const moods = ["😄: Happy", "😢: Sad", "😡: Angry", "😴:Sleepy"];
    const [mood, setMood] = useState("😐");
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    

    return(
        <>
            <h1>{mood}</h1>
            <div className="flex gap-5">
 <button className="text-black" onClick={() => setMood(randomMood)}>Change mood</button>
  <button className="text-black" onClick={() => setMood(mood)}>Reset mood</button>
            </div>
           
        </>
    )
}