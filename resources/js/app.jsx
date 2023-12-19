import React from "react"; 

import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';


function App(){
    return(
        "hello"
    )
}

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App />);

