
type Person = {
    name: string
    age: number
    height: number
    weight: number
}

export function Props ({name, age, height, weight}:Person ) {
    return(
        <div className="flex justify-center items-center flex-col">
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Height: {height}</h1>
            <h1>Weight: {weight}</h1>
        </div>
    )
}