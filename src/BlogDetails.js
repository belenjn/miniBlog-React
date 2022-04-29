import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

export const BlogDetails = () => {
  const { id } = useParams();

  const { data: blog, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

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
        </article>
      )}
    </div>
  );
};
