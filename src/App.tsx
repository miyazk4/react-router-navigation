import React from "react";
import "./App.scss";
import Home from "./home/Home";
import WhoWeAre from "./whoweare";
import { Route, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="mainNavigation">
        <ul className="mainList">
          <li>
            <NavLink to="/" activeClassName="fillColor" exact={true}>
              Homepage
            </NavLink>
          </li>
          <li className="aboutNav">
            <NavLink
              to="/WhoWeAre"
              activeClassName="fillColor"
              onClick={e => e.preventDefault()}
            >
              Who we are
            </NavLink>
            <div className="SecondaryNav">
              <ul>
                <li>
                  <NavLink to={`/WhoWeAre/aboutUs`}>About Us</NavLink>
                </li>
                <li>
                  <NavLink to={`/WhoWeAre/contacts`}>Contacts</NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/WhoWeAre">
          <WhoWeAre />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
