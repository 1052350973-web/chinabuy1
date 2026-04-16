import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  return <form className="card page auth" onSubmit={async (e) => { e.preventDefault(); await login(email); navigate('/'); }}><h1>Login</h1><input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><button>Login (Mock)</button><Link to="/forgot-password">Forgot password?</Link></form>;
}
