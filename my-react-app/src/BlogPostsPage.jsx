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
            <div className="post-card"> 
                <h1>Welcome!</h1>
                <h4>Hi! Everyone this is our Gardening Blog Page! This is where
                    we share our latest tips and tricks for growing a beautiful garden. 
                    We give updates on some of our latest projects. We show our progress with our newer plants and growth processes. 
                    Thank you for following our journey!</h4>
                <p><a href ="#post-list" >Explore Blog Posts!</a></p>    
            </div>
            <div id="post-list" className="posts-list">
                {posts.map((post) => (
                    <div className="post-card" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
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