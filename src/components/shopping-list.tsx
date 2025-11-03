"use client"
{/**💡 Your Task

Build a shopping list app where a user can:
1. Add new items
2. Delete individual items

🧱 Requirements
🏠 Parent Component (Home)
1. Has a items state (an array of strings)
2. Has a function addItem() that adds a new item to the list
3. Has a function removeItem(index) that deletes an item
4. Renders a text input, “Add” button, and a list of <Item /> components

🧩 Child Component (Item)
1. Receives the item name and an onDelete() function via props
2. Displays the item name
3. Has a “Remove” button that calls onDelete() when clicked */}

type listProps = {
    item: string,
    onDelete: () => void
}

export default function ShoppingList({item, onDelete} : listProps) {
    return (
        <div className="flex gap-2">
            <p className="text-black">{item}</p>
            <button onClick={onDelete} className="bg-blue-500 w-full p-3">Remove</button>
        </div>
    )
}