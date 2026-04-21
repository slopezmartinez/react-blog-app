import {useState} from 'react'
import { useAuth } from "./authWrapper/AuthContext"

function CommentForm(){
    const [comments, setComments] = useState([])
    const {user} = useAuth()
    const [name, setName] = useState(user?.name || '')
    const [comment, setComment] = useState('')

    const handleSubmit = () => {
        if (name && comment){
            fetch('https://jsonplaceholder.typicode.com/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name, 
                    body: comment,
                    email: 'user@example.com'
        })
    })
            .then(response => response.json())
            .then(newComment => {
                setComments([...comments, newComment])
                setName('')
                setComment('')
            })
            .catch(error => console.error('Error posting comment:', error))
        }
    }
    return(
        <div>
            <h2>Comments</h2>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Comments</label>
                <textarea
                    placeholder="Your Comment"
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <div>
                {comments.length === 0 ? (
                    <p>There have been no comments yet!</p>
                ) : (
                    comments.map((c, index) => (
                        <div key={index}>
                            <p><strong>{c.name}</strong></p>
                            <p>{c.body || c.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default CommentForm