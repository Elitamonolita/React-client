import React from "react";
import ReactDOM from 'react-dom';
import BlockStyle from "../src/blocks.js";
const App = () => {
    return (
        <div>
            <BlockStyle/>
        </div>
    );
};
ReactDOM.render(<App/>,
    document.getElementById('Block-list'));