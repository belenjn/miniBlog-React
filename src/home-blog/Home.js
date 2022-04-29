import React from "react";
import "./Home.css";
import { BlogList } from "../bloglist/BlogList";
import {useFetch} from "../hooks/useFetch.js"; 

export const Home = () => {

  const {data: blogs, isPending} = useFetch("http://localhost:8000/blogs");


  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs:" />}
    </div>
  );
};
