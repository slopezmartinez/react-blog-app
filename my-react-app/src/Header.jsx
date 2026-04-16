import {Link} from 'react-router-dom'
import posts from './posts'
import { useTheme } from './ThemeContext'

 

function Header(){
    const {theme, toggleTheme} = useTheme()
    return(
        <div id = "header">
            <h2>My Blog</h2>
            <nav>
               <Link to="/">Home</Link>
               {/* changed to home */}
               {/* {posts.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`}>{post.title}</Link>  
                ))}//took off the for the posts in navbar */}
               <Link to="/contact">Contact</Link>
               { <Link to="/login">Login</Link> }
               {/* added link login */}
               <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
               </button>
            </nav>
        </div>
    )
}

export default Header;