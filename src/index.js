import React from "react";
import ReactDOM from 'react-dom';
import Menu from "./components/menu/menu.js";
import MainPage from "./components/main-page/main-page";
import Tariffs from "./components/tarrifs/tariffs";
import clientData from "./components/main-page/main-page"
const App = () => {
    return (
        <div>
            <Menu/>
            <MainPage/>
            {/*<Tariffs/>*/}
        </div>
    );
};
ReactDOM.render(<App/>,
    document.getElementById('Block-list'));