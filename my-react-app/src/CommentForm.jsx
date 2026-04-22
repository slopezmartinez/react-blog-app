import { useState } from 'react'
import { useUsername, useAuth } from './authWrapper/AuthContext';

function CommentForm() {
    const [comments, setComments] = useState([])
    const username = useUsername();
    const [name, setName] = useState(username || '')
    const [comment, setComment] = useState('')

    const handleSubmit = () => {
        if (comment) {
            fetch('https://jsonplaceholder.typicode.com/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: username,  
                    body: comment,
                })
            })
            .then(response => response.json())
            .then(newComment => {
                setComments([...comments, newComment])
                setComment('')
            })
            .catch(error => console.error('Error posting comment:', error))
        }
    }

    return (
        <div>
            <h2>Comments</h2>
            <div>
                <label>Comment</label>
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
                            <p>{c.body}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
export default CommentForm