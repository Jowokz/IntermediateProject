export default function TaskCard({ task, onStatusChange, onDelete }) {
  return (
    <div className="card task-card">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <div className="badges">
          <span>{task.status}</span>
          <span>{task.priority}</span>
        </div>
      </div>
      <div className="task-actions">
        <select
          value={task.status}
          onChange={(event) => onStatusChange(task.id, event.target.value)}
        >
          <option value="todo">todo</option>
          <option value="in-progress">in-progress</option>
          <option value="done">done</option>
        </select>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
