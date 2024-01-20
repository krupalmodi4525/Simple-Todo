import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todo, onDeleteTodo} = this.props
    return (
      <li className="todo-item">
        <p className="todo-title">{todo.title}</p>
        <button className="delete-button" onClick={() => onDeleteTodo(todo.id)}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
