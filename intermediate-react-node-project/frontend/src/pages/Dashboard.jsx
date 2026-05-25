import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import { createProject, getProjects } from '../api/projectApi.js';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadProjects();
  }, []);

  async function handleCreateProject(event) {
    event.preventDefault();

    try {
      const project = await createProject({ name, description });
      setProjects((currentProjects) => [...currentProjects, project]);
      setName('');
      setDescription('');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section>
      <h1>Projects</h1>
      {error && <p className="error">{error}</p>}

      <form className="inline-form" onSubmit={handleCreateProject}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Project name" />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">Create Project</button>
      </form>

      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
