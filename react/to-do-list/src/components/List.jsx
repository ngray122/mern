import React, { useState } from "react";
import styles from "./List.module.css"

const List = () => {

    let [listItem, setListItem] = useState('');

    let [listOfTasks, setlistOfTasks] = useState([]);

    let [completed, setCompleted] = useState(false)

    const createTask = (e) => {
        e.preventDefault();
        let listObj = { listItem }
        setlistOfTasks([...listOfTasks, listObj]) 
        document.getElementById('taskInput').value = ''

    }

    const toggleCompleted = (i) => {
        let[...copyOfListOfTasks] = listOfTasks
        copyOfListOfTasks[i].completed = !copyOfListOfTasks[i].completed
        setlistOfTasks(copyOfListOfTasks)
    }

    const deleteTask = (e, i) => {
        e.preventDefault();
        let[...copyOfListOfTasks] = listOfTasks
        copyOfListOfTasks.splice(i, 1)
        console.log("index: " +i)
        console.log(copyOfListOfTasks)
        setlistOfTasks(copyOfListOfTasks)
    }

    return (
        <div className="container">
            <h1>To Do List</h1>
            <form onSubmit={createTask}>
                <div className="form-group">
                    <label htmlFor="">Add task:</label>
                    <input type="text" className="form-control" id="taskInput" onChange={(e) => setListItem(e.target.value)} />
                </div>
                <input type="submit" value="Add Item" />
            </form>
            <div>
                <hr />
                <h2>Nicole's To Do List</h2>
                {

                    listOfTasks.map((list, i) => {
                        return (
                            <div className={styles.list} key={i} style={{ textDecoration: list.completed ? "line-through" : "none" }}>
                                <h6>{list.listItem}</h6>
                                <p><input type="checkbox" className="" onClick={() => toggleCompleted(i)} />Completed</p>
                                <input type="submit" onClick={deleteTask} value="Delete Task"/>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default List