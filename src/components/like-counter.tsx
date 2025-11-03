'use client'

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