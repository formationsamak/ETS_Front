import logo from "../../logo.svg";
import {Button} from "@mui/material";
import React from "react";

export function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Button onClick={() => console.log('ahah you find that thing')}>
                    Hello, i do something
                </Button>
            </header>
        </div>
    );
}