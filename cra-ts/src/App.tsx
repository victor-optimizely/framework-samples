
import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
// todo: investigate importing to avoid accessing node_modules - potentically host on cdn and include as script src
// import '@optimizely/global-navigation';
import '../node_modules/@optimizely/global-navigation/dist/src/global-navigation';

function App() {
    const headerRef = useRef();


    function eventListener(event: any) {
        const value = event.detail;

        if (value.toLowerCase() === 'rad') {
            // @ts-ignore
            headerRef.current.reportValue();
        }
    }

    useEffect(() => {
        if (!headerRef.current) {
            console.log(" not in DOM")
            return;
        }
        // @ts-ignore
        headerRef.current.addEventListener('custom-input', eventListener);

        return () => {
            // @ts-ignore

            headerRef.current.removeEventListener('custom-input', eventListener);
        }
    });
    return (
        <>

            {/** @ts-ignore **/}
            <global-navigation ref={headerRef}></global-navigation>
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
