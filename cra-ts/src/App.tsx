
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
            <global-navigation ref={headerRef}>
                {/* <div slot='right'>
                    <img src="https://raw.githubusercontent.com/episerver/alpaca/c8add211890a61b88fd6033c16d34bcb09a46817/public/bit/static/images/peekaboo.jpeg?token=GHSAT0AAAAAABVED4VTTPCTWT3HGZ5XGDMQYWHKHHQ" alt="Alpaca" style={{maxWidth: "40px", marginRight: 10,  borderRadius: "50%"}}/>
                </div> */}
            {/** @ts-ignore **/}
            </global-navigation>
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
