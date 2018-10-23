import { BrowserRouter, Link, Route } from "react-router-dom";
import React = require("react");

export default class AppRouter extends React.Component {
    render = () => (
        <BrowserRouter>
            <div>
                <Link to="/" style={{ display: "block" }}> Home</Link>
                <Link to="/about" style={{ display: "block" }}> About</Link>
                <Link to="/topics" style={{ display: "block" }}> Topics</Link>
                <Route exact path="/" component={() => <div> Home </div>} />
                <Route path="/about" component={() => <div> About </div>} />
                <Route path="/topics" component={() => <div> Topics </div>} />
            </div>
        </BrowserRouter>);
}