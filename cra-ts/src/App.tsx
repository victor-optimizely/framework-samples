import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OptiHeader } from "../../../header/webcomponent/opti-header/dist/src";

function App() {
    return (
        <>
            <head>
                <script
                    src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"
                    defer
                ></script>

                <script type="module">
                    WebComponents.waitFor((_) => {
                        return import('node_modules/opti-header/dist/src');
                    });
                </script>
                <title>Create React App with WebComponent Header</title>

            </head>
            <OptiHeader />
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </>
    );
}

export default App;
