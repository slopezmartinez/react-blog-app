import {Link} from 'react-router-dom' 
import posts from './posts'
import{useState, useEffect} from 'react'
import axios from 'axios'

function BlogPostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => setPosts(response.data))
    .catch(error => console.error('Error fetching posts:', error));
}, []);

    return (
        <div className ="app">
            <div className="posts-list">
                {posts.map((post) => (
                    <div className="post-card" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.author}</p>
                        <p>{post.date}</p>
                        <Link to={`/post/${post.id}`}>Read More</Link>
                    </div>
                ))}
        </div>
        </div>
    )
}

export default BlogPostsPage