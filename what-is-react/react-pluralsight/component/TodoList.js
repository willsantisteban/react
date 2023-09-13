"use client"
import React, { useState } from "react";
import AddForm from "./AddForm";
import TodoItems from "./TodoItems";

export default function TodoList() {
    const [toDoList, setToDoList] = useState([
        { text: "Item 1", id: 1656632538430 },
        { text: "Item 2", id: 1656632478827 }
    ]);

    function deleteItem(id) {
        setToDoList((toDoList) => toDoList.filter((rec) => id != rec.id));
    }

    const addTask = (userInput) => {
        const newValue = { text: userInput, id: Date.now() };
        setToDoList((toDoList) => [newValue, ...toDoList]);
    };

    return (
        <div className="container">
            <div className="row mb-1 ms-1 me-1 mt-2">
                <AddForm addTask={addTask}></AddForm>
            </div>
            <div className="row mb-3 ms-1 me-1 mt-3">
                <TodoItems entries={toDoList} deleteItem={deleteItem} />
            </div>
        </div>
    );
}