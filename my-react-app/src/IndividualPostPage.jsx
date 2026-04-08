import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import posts from './posts'
import CommentForm from './CommentForm'
import{useState, useEffect} from 'react'

function IndivdualPostPage(){
    const {id} = useParams()
    const [post, setPost] = useState(null)
    const [user, setUser] = useState(null)
    const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data)
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
      })
      .then(response => response.json())
      .then(userData => setUser(userData))
      .catch(error => console.error('Error fetching post:' . error))

      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:' . error))
    }, [id])

    if(!comments) return <p>No Comments yet. Be the first to comment!</p>
    if(!post) return <p>Loading...</p>

    return(
        <div className ="post-card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {user && (
                <div>
                    <p>Author: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
            <Link to ="/">Back to all posts</Link>
            <CommentForm/>
        </div>
    )
}

export default IndivdualPostPage