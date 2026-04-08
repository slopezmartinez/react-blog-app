import {Link} from 'react-router-dom'
import posts from './posts'
import { useTheme } from './ThemeContext'
 

function Header(){
    const {theme, toggleTheme} = useTheme()
    return(
        <div id = "header">
            <h2>My Blog</h2>
            <nav>
               <Link to="/">Blog Posts List</Link>
               {posts.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`}>{post.title}</Link>  
                ))}
               <Link to="/contact">Contact</Link>
               <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
               </button>
            </nav>
        </div>
    )
}

export default Header;