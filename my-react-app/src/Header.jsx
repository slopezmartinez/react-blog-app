import {Link} from 'react-router-dom'
import posts from './posts'
import { useTheme } from './ThemeContext'
import { useUsername, useAuth } from './authWrapper/AuthContext';

 

function Header(){
    const username = useUsername();
    const { logout } = useAuth();
    const {theme, toggleTheme} = useTheme()
    return(
        <div id = "header">
            {/* <h2>My Blog</h2> */}
            <h2>My Green Thumb</h2>
            <nav>
               <Link to="/">Home</Link>

               {/* changed to home */}
               {/* {posts.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`}>{post.title}</Link>  
                ))}//took off the for the posts in navbar */}

               <Link to="/contact">Contact</Link>
               <button className="theme-btn" onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
               </button>
               {/* added link login */}
               {username ? <p> Hi {username}! <button className="logout-btn" onClick={logout}>Logout</button></p>: <Link to="/login">Login</Link>}

               
            </nav>
        </div>
    )
}

export default Header;