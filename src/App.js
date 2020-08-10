import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// files imports
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/project/:id" component={ProjectDetails}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
