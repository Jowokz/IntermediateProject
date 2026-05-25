import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskCard from '../components/TaskCard.jsx';
import { createTask, deleteTask, getProjectTasks, updateTask } from '../api/projectApi.js';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [statusFilter, setStatusFilter] = useState('all');
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadTasks() {
      try {
        const data = await getProjectTasks(projectId);
        setTasks(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadTasks();
  }, [projectId]);

  const visibleTasks = useMemo(() => {
    if (statusFilter === 'all') return tasks;
    return tasks.filter((task) => task.status === statusFilter);
  }, [tasks, statusFilter]);

  async function handleCreateTask(event) {
    event.preventDefault();

    try {
      const task = await createTask(projectId, { title, description, priority });
      setTasks((currentTasks) => [...currentTasks, task]);
      setTitle('');
      setDescription('');
      setPriority('medium');
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleStatusChange(taskId, status) {
    const updated = await updateTask(projectId, taskId, { status });
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === taskId ? updated : task))
    );
  }

  async function handleDelete(taskId) {
    await deleteTask(projectId, taskId);
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  }

  return (
    <section>
      <h1>Project Tasks</h1>
      {error && <p className="error">{error}</p>}

      <form className="task-form" onSubmit={handleCreateTask}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      <div className="toolbar">
        <label>Status filter</label>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">all</option>
          <option value="todo">todo</option>
          <option value="in-progress">in-progress</option>
          <option value="done">done</option>
        </select>
      </div>

      <div className="stack">
        {visibleTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}
