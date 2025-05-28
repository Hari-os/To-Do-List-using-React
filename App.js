import { useState } from 'react'
import './App.css'
function App() {
      let [todoInput, updateInput] = useState()

      let [todoList, updateTodos] = useState(
            [
                  {
                        id: 1,
                        task: 'Learn React'

                  },
                  {
                        id: 2,
                        task: 'Learn Angulr'

                  }
            ]
      )

      let nextId = 3

      function addNewTodo() {

            if (todoInput == "") {
                  alert("Add some task")
            }
            else {

                  let newTodos = [
                        ...todoList,
                        {
                              id: nextId++,
                              task: todoInput

                        }
                  ]
                  updateTodos(newTodos);
                  updateInput("")
            }

      }

      function deleteTodo(id) {
            let filteredTodos = todoList.filter(
                  (todo) => {
                        return todo.id != id

                  }
            )
            updateTodos(filteredTodos)



      }


      return (
            <div className="container mt-5 w-50" >
                  <div className='header'>
                        <h2 className='text-center'>To-Do-List using React</h2>
                  <img src="public/icon.png" alt="hello" />
                  </div>
                  <div className="input-group">
                        <input className="form-control" onChange={(e) => {
                              let task = e.target.value;
                              updateInput(task)

                        }} type='text' value={todoInput} />
                        <button onClick={() => {
                              addNewTodo()
                        }} className="btn btn-primary">Add</button>
                  </div>
                  <ul className="list-group mt-4">
                        {
                              todoList.map(
                                    (todo) => {
                                          return (
                                                <li key={todo.id} className="list-group-item">
                                                      <p>{todo.task}</p>
                                                      <button onClick={() => {
                                                            deleteTodo(todo.id)
                                                      }} className="btn"> ❌</button>
                                                </li>
                                          )
                                    }
                              )
                        }


                  </ul>
            </div>
      )




}

export default App