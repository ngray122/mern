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
        setListItem(' ')
        // document.getElementById('input').value = ' '

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
        setlistOfTasks(copyOfListOfTasks)
    }

    return (
        <div className={styles.container}>
            <h1>To Do List</h1>
            <form onSubmit={createTask} className={styles.form}>
                <div className="form-group" id={styles.formLabel}>
                    <label htmlFor="" >Add task:</label>
                    <input type="text" className="form-control" id={styles.input} placeholder="Add Task" onChange={(e) => setListItem(e.target.value)} />
                </div>
                <input type="submit" value="Add Item"  className={styles.button}/>
            </form>
            <div className={styles.formInput}>
                <hr />

                <h2>Nicole's To Do List</h2>
                {

                    listOfTasks.map((list, i) => {
                        return (
                            <div className={styles.list} key={i} style={{ textDecoration: list.completed ? "line-through" : "none" }}>
                                <h6>{list.listItem}</h6>

                                <p><input className="form-control-check" id={styles.check} type="checkbox"  onClick={() => toggleCompleted(i)} />Complete</p>
                                
                                <input type="submit" onClick={deleteTask} value="Delete Task" className={styles.button}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>

    )
}

export default List