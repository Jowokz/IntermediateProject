import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const [email, setEmail] = useState('jo@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    try {
      await login({ email, password });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="auth-card">
      <h1>Login</h1>
      <p>Use any email/password for this demo.</p>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
