import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login/components/Login";
import AddTranslation from "./Login/Translation/components/AddTranslation";
import ListTranslation from "./Login/Translation/components/ListTranslation";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
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
                <Login/>
                <button>add document</button>


                <AddTranslation/>

                <ListTranslation/>
            </header>
        </div>
    );
}

export default App;
