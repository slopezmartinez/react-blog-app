import { useState } from 'react'
import { useAuth } from './authWrapper/AuthContext';


function Login() {
    const { login } = useAuth();

    const [userData, setUserData] = useState({
           username: '', 
           password: '',
        });

        const onSubmit =(e) =>{
            e.preventDefault();
            login(userData.username);
            // console.log(userData)
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;