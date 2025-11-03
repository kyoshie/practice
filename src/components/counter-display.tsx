
type trackProps = {
    count: number,
    onIncrease: ()=> void,
    onReset: ()=> void,
}

export default function CounterDisplay({count, onIncrease, onReset} : trackProps) {
    
    function getMessages(){
        if (count == 0) {
            return "Let’s start counting"
        } else if (count >=1 && count <= 5 ) {
               return "Keep going 👏"
        }
        else {
          return  "Wow, you’re on fire! 🔥"
        }
    }

    const messages = getMessages();

    return(
        <div className="text-black flex flex-col gap-1">
            <p>Count: {count}</p>
            <p>{messages}</p>
            <div className="flex gap-3 w-full">
                <button className="bg-blue-400 p-2" onClick={onIncrease}>+ Add</button>
                <button className="bg-blue-400 p-2" onClick={onReset}>Reset</button>
            </div>
            
        </div>
    )
}