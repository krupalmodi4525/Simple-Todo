import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todosList: initialTodosList,
    }
  }

  handleDeleteTodo = todoId => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(todo => todo.id !== todoId)
    this.setState({
      todosList: updatedTodosList,
    })
  }

  render() {
    const {todosList} = this.state

    return (
      <div className="simple-todo-container">
        <h1>Simple Todos</h1>
        <ul className="todo-list">
          {todosList.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={this.handleDeleteTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodo
