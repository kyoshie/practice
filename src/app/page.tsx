import { Props } from "@/components/props";

export default function Home() {
  return (
   <div className="flex justify-center items-center h-full w-full flex-col gap-3">
    <Props 
      name = "joshua" 
      age = {13}
      height={164}
      weight={64}
    />
     <Props 
      name = "joshua" 
      age = {13}
      height={164}
      weight={64}
    />
   </div>
  );
}
