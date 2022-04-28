import "./App.css";
import { Navbar } from "./Navbar";

export const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
};
