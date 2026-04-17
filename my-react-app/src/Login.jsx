import { useState } from 'react'
import { useAuth } from './authWrapper/AuthContext';
import { useNavigate } from 'react-router-dom';


function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
           username: '', 
           password: '',
        });
        
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
        const onSubmit = async (e) =>{
            e.preventDefault();
            setError('');
            setLoading(true);
            // console.log(userData)

            try{
                const response = await fetch('http://localhost:5000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: userData.username,
                        password: userData.password,
                    })
                });
                const data = await response.json();
                if(!response.ok){
                    throw new Error(data.message || "You've Entered a Wrong Username or Password");
                }
                login(userData.username, data.token);
                navigate('/dashboard');

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
    
        }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                id="username"
                placeholder="Username"
                value={userData.username} 
                onChange={(e) => setUserData({...userData, username: e.target.value})} 
                />

                <input
                id="password"
                type="password"
                placeholder="Password"
                value={userData.password} 
                onChange={(e) => setUserData({...userData, password: e.target.value})} 
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}
                
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
}
export default Login;