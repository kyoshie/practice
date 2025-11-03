"use client"

import { useState } from "react"

{/* Task: Dynamic Color Changer

Goal: Create a small app where you can type a color name or hex code, click a button, and it changes the background color of a box.

Requirements:
1. An input field where the user can type a color (like red or #00ff00).
2. A button called “Change Color”.
3. A square div (200x200px) whose background color changes to what the user typed.
4. Use useState to store the current color.

Bonus challenge:
If the user types something invalid, show “Invalid color” below the box.*/}

export default function Color() {
    const [color, setColor] = useState("");
    const [appliedColor, setAppliedColor] = useState("");

    return(
        <div>
            <div className="w-[200px] h-[200px]" style={{backgroundColor: appliedColor }}></div>
            <input value={color} onChange={(e) => setColor(e.target.value)} />
            <button onClick={()=>setAppliedColor(color)}>Change Color</button>
        </div>
    )
}