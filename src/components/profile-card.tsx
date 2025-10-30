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
      <div className="flex items-center justify-center gap-2">
        <span
          className={`h-3 w-3 rounded-full ${
            online ? "bg-green-500" : "bg-gray-400"
          }`}
        ></span>
      {online ? (<p className="text-sm text-green-600">Online</p>) :  <p className="text-sm text-gray-500">Offline</p>}
      </div>

<div className={online ? "text-black": "text-gray-500"}>
 <h2 className="text-lg font-semibold">{name}</h2>
      <p>Age: {age}</p>
      <p className="italic">Loves {hobby}</p>

</div>
     
      <button onClick={() => setOnline(!online) } className={`mt-2 px-4 py-1 rounded ${online ? "bg-green-500 text-white" : "bg-gray-200"}`}>
       {online ? "Go Offline": "Go Online"}

      </button>
    </div>
  );
}
