import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login/components/Login";
import AddTranslation from "./Translation/components/AddTranslation";
import ListTranslation from "./Translation/components/ListTranslation";

function App() {
    return (
        <div className="App">
                <AddTranslation/>

                <ListTranslation/>
        </div>
    );
}

export default App;
