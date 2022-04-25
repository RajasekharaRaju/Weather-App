import React, { useState } from 'react'
import TodoListOne from './TodoListOne'

function TodoList() {

    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    const changeHandler = e => {
        setTask(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()
        console.log(task)

        const TodoList = [...todos, task]
        setTodos(TodoList)
        setTask("");
    }

    const deleteHandler = (indexValue) => {
        const newTodos = todos.filter((todo, index) => index !== indexValue)
        setTodos(newTodos)
    }

  return (
    <div>
        <center>
            <div className='card'>
                <div className='cardBody'>
                    <h5 className='cardTitle'>TodoList Application</h5>
                    <form onSubmit={submitHandler}>
                        <div>
                            <input type="text" value={task} onChange={changeHandler} name="task" /> &nbsp; &nbsp;
                            <input type="submit" value="Add" name="Add" />
                        </div>
                    </form>
                    <TodoListOne todoList={todos} deleteHandler={deleteHandler}/>
                </div>
            </div>
        </center>
    </div>
  )
}

export default TodoList