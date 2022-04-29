import { Home } from "./home-blog/Home";
import { Navbar } from "./navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import { Create } from "./Create";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
