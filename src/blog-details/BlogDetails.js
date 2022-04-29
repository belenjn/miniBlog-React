import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./BlogDetails.css"

export const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: blog, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <br/>
          <h4>Written by {blog.author}</h4>
          <br/>

          <div><p>{blog.body}</p></div>
          <br/>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};
