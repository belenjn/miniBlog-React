import { Home } from "./home-blog/Home";
import { Navbar } from "./navbar/Navbar";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

import "./index.css";
import { Create } from "./Create";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}>
            </Route>
            <Route path="/create" element={<Create/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
