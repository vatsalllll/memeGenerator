import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import './style.css'; // Import your global CSS file here

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    );
}
