import React from "react";
import Contacts from "./contacts";
import AboutUs from "./aboutus";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./index.scss";

export default function WhoWeAre() {
  let match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/contacts`}>
          <Contacts />
        </Route>
        <Route path={`${match.path}/aboutUs`}>
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}
