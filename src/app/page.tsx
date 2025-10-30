'use client'
import ProfileCard from "@/components/profile-card";

  const Person = [
    {
  name: "Joshua",
    age: 25,
    hobby: "Playing Guitar",
    isOnline: true
    },
     {
  name: "Denise",
    age: 21,
    hobby: "Drawing",
    isOnline: false
    },
]

export default function Home() {

  return (
    <div className="min-h-screen flex flex-row gap-10 items-center justify-center bg-gray-50 p-6">

      {Person.map((person, index) =>(
          <ProfileCard
          key={index}
          name={person.name}
          age={person.age}
           hobby={person.hobby}
             isOnline={person.isOnline}
          />
      ) )}
      
      
    </div>
  );
}
