import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { StartPage } from "./pages";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={StartPage} />
        </BrowserRouter>
    );
};

export default App;
