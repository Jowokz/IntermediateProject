import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="card link-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </Link>
  );
}
