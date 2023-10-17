export const Footer: React.FC<Props> = ({
  activecount,
  todos,
  onClearCompleted
}) => {
  return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length}</strong>
            </span>
        </footer>
  )
}
