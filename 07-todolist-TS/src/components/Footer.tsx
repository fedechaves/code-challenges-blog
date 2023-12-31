import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  onClearCompleted: () => void
  completedCount: number
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onClearCompleted
}) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong>
            </span>

            <Filters
              filterSelected={filterSelected}
              onFilterChange={handleFilterChange}
            />
            {
                completedCount > 0 && (
                    <button
                    className='clear-completed'
                    onClick={onClearCompleted}
                    >
                        Erase completed
                    </button>
                )
            }
        </footer>
  )
}
