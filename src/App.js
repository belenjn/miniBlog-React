import { Home } from "./home-blog/Home";
import { Navbar } from "./navbar/Navbar";
import "./index.css";





export const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
};
