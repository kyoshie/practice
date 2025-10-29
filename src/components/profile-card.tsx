import { useState } from "react";

type ProfileCard = {
  name: string;
  age: number;
  hobby: string;
  isOnline: boolean;
};

export default function ProfileCard({ name, age, hobby, isOnline }: ProfileCard) {
    const [online, setOnline] = useState(isOnline)

  return (
    <div className="border rounded-xl shadow-md p-4 w-64 text-center flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <span
          className={`h-3 w-3 rounded-full ${
            isOnline ? "bg-green-500" : "bg-gray-400"
          }`}
        ></span>
        <p className="text-sm text-gray-600">{isOnline ? "Online" : "Offline"}</p>
      </div>

      <h2 className="text-lg font-semibold">{name}</h2>
      <p>Age: {age}</p>
      <p className="italic">Loves {hobby}</p>

      <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Say Hi 👋
      </button>
    </div>
  );
}
