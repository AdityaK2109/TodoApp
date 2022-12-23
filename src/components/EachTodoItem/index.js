import './index.css'
import {RiDeleteBin6Line} from 'react-icons/ri'

const ListTodo = props => {
  const {eachTodo, onDeleteTodo, onChangeIsCompleted} = props

  const onClickDeleteButton = () => {
    onDeleteTodo(eachTodo.id)
  }

  const onChangeCheckbox = () => {
    onChangeIsCompleted(eachTodo.id)
  }

  return (
    <li
      key={eachTodo.id}
      className={
        eachTodo.isCompleted
          ? 'each-list-item checked-item'
          : 'each-list-item each-todo'
      }
    >
      <input
        type="checkbox"
        value={eachTodo.isChecked ? 'checked' : 'unchecked'}
        onChange={onChangeCheckbox}
        name="todo"
      />
      <p>{eachTodo.text}</p>
      <button
        type="button"
        className="delete-button"
        onClick={onClickDeleteButton}
      >
        <RiDeleteBin6Line size={18} />
      </button>
    </li>
  )
}

export default ListTodo
