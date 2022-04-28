import "./index.css";
import { Home } from "./Home";
import { Navbar } from "./Navbar";


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
