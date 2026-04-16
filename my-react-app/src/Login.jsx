import { useState } from 'react'


function Login() {
    const [username, setUsername] = useState[{
           username: "", 
           password: "",
        }];
    return(
        <div>
            <input
            className="border"
            placeholder={userData.username} 
            onChange={(e) => setUserData({...userData, username: e.target.value})} />
            <input
            className="border"
            placeholder={userData.password} 
            onChange={(e) => setUserData({...userData, password: e.target.value})} />
        </div>
    );
}
export default Login;