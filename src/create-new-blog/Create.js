import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "./Create.css"


export const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = {title, body, author};

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      // navigate.go(-1);//vuelve 1 pag atras
      navigate('/');//vuelve al home
    })


  }

  return (
    <div className='create'>
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          >
          </textarea>
          <label>Blog author:</label>
          <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Daniel">Daniel</option>
            <option value="Cristina">Cristina</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled className='disabled'>Adding blog...</button>}
        </form>
    </div>
  )
}
