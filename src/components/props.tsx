
export function Props ({name, age, height, weight}:{name:string, age:number, height:number, weight:number}) {
    return(
        <div className="flex justify-center items-center flex-col">
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Height: {height}</h1>
            <h1>Weight: {weight}</h1>
        </div>
    )
}