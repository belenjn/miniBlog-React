import React, { useState, useEffect } from "react";
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(
    () => async () => {
      const response = await fetch("http://localhost:8000/blogs");

      if (!response.ok) {
        const message = `An error has ocurred ${response.status}`;
        throw new Error(message);
      }

      const responseJSON = await response.json();
      setBlogs(responseJSON);
      setIsPending(false);
    },
    []
  );

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs:" />}
    </div>
  );
};
