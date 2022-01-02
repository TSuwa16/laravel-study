import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HelpPage from "./pages/help";
import LoginPage from "./pages/login";
import TaskPage from "./pages/tasks";

export default function Router() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Task Page</Link>
                        </li>
                        <li>
                            <Link to="/help">Help</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/help">
                        <HelpPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/">
                        <TaskPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
