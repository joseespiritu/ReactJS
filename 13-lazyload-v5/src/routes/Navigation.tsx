import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import { routes } from "./routes";

import logo from "../assets/react.svg";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(({name, path}) => (
                  <li key={path}>
                    <NavLink to={path} activeClassName="nav-active" exact>{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {
              routes.map(({path, Component}) => (
                <Route 
                  key={path} 
                  path={path} 
                  render={() => <Component/>}
                />
              ))
            }
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}