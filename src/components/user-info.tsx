
type information = {
    name: string,
    age: number,
    bio: string
}

type userInfoProps = {
    user: information,
    isVisible: boolean,
    onToggle: () => void
}

export default function UserInfo({user, isVisible, onToggle}: userInfoProps) {
    return(
      <div className="flex flex-col items-start gap-2 text-black border p-4 rounded-md bg-white shadow-md">
      <p className="font-bold text-lg">{user.name}</p>
      <button onClick={onToggle} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">
        {isVisible ? "Hide Details" : "Show Details"}
      </button>

      {isVisible && (
        <div className="mt-2 text-gray-700">
            <p>Age: {user.age}</p>
          <p>Bio: {user.bio}</p>
        </div>
      )}
    </div>
    )
}