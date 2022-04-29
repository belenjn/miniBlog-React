import { Home } from "./home-blog/Home";
import { Navbar } from "./navbar/Navbar";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

import "./index.css";
import { BlogDetails } from "./blog-details/BlogDetails";
import { Create } from "./create-new-blog/Create";
import { NotFoundPage } from "./not-found-page/NotFoundPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/blogs/:id" element={<BlogDetails/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
