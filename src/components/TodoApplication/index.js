// Write your code here
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import EachTodoItem from '../EachTodoItem'

class Todo extends Component {
  state = {todoList: [], todoText: '', errorMsg: ''}

  onSubmitTodo = event => {
    event.preventDefault()
    const {todoText, todoList} = this.state
    const isTodoPresent = todoList.findIndex(
      eachTodo => eachTodo.id === todoText,
    )

    if (isTodoPresent === -1) {
      const newTodo = {
        id: todoText,
        text: todoText,
        isCompleted: false,
      }

      this.setState(prevState => ({
        todoList: [...prevState.todoList, newTodo],
        todoText: '',
        errorMsg: '',
      }))
    } else {
      this.setState({errorMsg: 'Todo is already present'})
    }
  }

  onChangeTodoText = event => {
    this.setState({todoText: event.target.value})
  }

  onDeleteTodo = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(eachTodo => {
        if (eachTodo.id !== id) {
          return eachTodo
        }
        return null
      }),
    }))
  }

  onChangeIsCompleted = id => {
    this.setState(prevState => ({
      todoList: [
        ...prevState.todoList.map(eachTodo => {
          if (eachTodo.id === id) {
            return {...eachTodo, isCompleted: !eachTodo.isCompleted}
          }
          return eachTodo
        }),
      ],
    }))
  }

  addTodoForm = () => {
    const {todoText, errorMsg} = this.state
    return (
      <div className="add-todo-container">
        <form onSubmit={this.onSubmitTodo} className="form-container">
          <label htmlFor="todoText" className="label-text">
            TODO TEXT
          </label>
          <input
            type="text"
            id="todoText"
            placeholder="Enter Todo Text"
            className="input-container"
            onChange={this.onChangeTodoText}
            value={todoText}
          />
          {errorMsg !== '' && <p className="error-msg">{errorMsg}</p>}
          <button type="submit" className="add-todo-button">
            Add
          </button>
        </form>
      </div>
    )
  }

  listTodoItems = () => {
    const {todoList} = this.state

    return (
      <div className="list-todo-container">
        <h1 className="todo-list-heading">Todo List</h1>
        <ul className="todo-list-container">
          {todoList.map(eachTodo => (
            <EachTodoItem
              key={eachTodo.id}
              eachTodo={eachTodo}
              onDeleteTodo={this.onDeleteTodo}
              onChangeIsCompleted={this.onChangeIsCompleted}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {todoList, todoText, isCompleted} = this.state
    console.log(todoList)
    console.log(todoText)
    console.log(isCompleted)

    return (
      <div className="page">
        <Header />
        <div className="page-content-container">
          <div className="content-container">
            {this.addTodoForm()}
            {this.listTodoItems()}
          </div>
        </div>
      </div>
    )
  }
}

export default Todo
