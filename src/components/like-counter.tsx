'use client'

{/*🧩 React Coding Practice: “Username Greeting + Counter”
Goal:
Create an app with two components:
1. A Parent component (App) that stores both a username and a count using useState.
2. A Child component (GreetingCard) that receives both values as props and displays them — along with a “Like” button to update the count.

🎯 Requirements
The Parent component should:
1. Use useState for count (starting at 0).
2. Have a constant username (e.g. "Albert").
3. Pass both username and count as props to the child.
4. Also pass a function (like handleLike) to increase the count.

The Child component (GreetingCard) should:
1. Display a greeting: "Hello, [username]!"
2.Show "You have [count] likes ❤️".
3.Have a button that says "Add Like" — clicking it calls the function from props to update the count.*/}

type user = {
    username: string,
    count: number
    onLike: () => void
}

export default function LikeCounter({username, count, onLike}:user) {
    return(
        <div className="">
            <p>Hello, {username}!</p>
            <p>You have {count} likes❤️</p>
            <button onClick={onLike}>Add Like</button>
        </div>
    )
}