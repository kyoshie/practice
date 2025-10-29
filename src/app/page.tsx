import ProfileCard from "@/components/profile-card";

export default function Home() {

  const people = [
    { name: "Joshua", age: 21, hobby: "coding", isOnline: true },
    { name: "Alyssa", age: 20, hobby: "painting", isOnline: false },
    { name: "Miguel", age: 23, hobby: "gaming", isOnline: true },
  ];


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">People List 💬</h1>

      <div className="flex flex-wrap justify-center gap-6">
       {people.map((person, index) => 
       <ProfileCard
        key = {index}
        name = {person.name}
        age = {person.age}
        hobby = {person.hobby}
        isOnline = {person.isOnline}
        />)
        }
      </div>
    </div>
  );
}
