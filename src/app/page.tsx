'use client';

import UserInfo from "@/components/user-info";
import { useState } from "react";

export default function Home() {
   const [isVisible, setIsVisible] = useState(false)

  const [user] = useState({
    name:'Alex Rivera',
    age: 23,
    bio: "Frontend developer and coffee lover"
  })

  function toggleVisibility() {
    setIsVisible(!isVisible)
  }
 

    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ">

      <UserInfo
        user={user}
        isVisible={isVisible}
        onToggle={toggleVisibility}
        />

    </div>
  );
}
