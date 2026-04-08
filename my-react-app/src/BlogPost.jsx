function BlogPost({ title, author, date, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author: {author}</p>
      <p>Date: {date}</p>
    </div>
  )
}

export default BlogPost;