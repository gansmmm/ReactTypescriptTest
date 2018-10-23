import * as React from "react";
import AppRouter from "./appRouter";
import ReactDOM = require("react-dom");

export default class App extends React.Component {
    render() {
        return (<div> App!!!!
            <AppRouter/>
        </div>);
    }
};

ReactDOM.render(
    <App />,
    document.getElementById("app")
);