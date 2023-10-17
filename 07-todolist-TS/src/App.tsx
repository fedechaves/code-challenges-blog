import { useState } from 'react'
import { Todos } from './components/Todos'
import './App.css'
import { type FilterValue, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  },
  {
    id: '4',
    title: 'todo 4',
    completed: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handlefilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' |
  'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">
    <Todos
      onRemoveTodo={handleRemove}
      onToggleCompleteTodo={handleCompleted}
      todos={filteredTodos}
    />
    <Footer
      activeCount={activeCount}
      completedCount={completedCount}
      filterSelected={filterSelected}
      onClearCompleted={() => {}}
      handleFilterChange={handlefilterChange}
    />
    </div>
  )
}

export default App
