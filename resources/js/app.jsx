import React, { useState } from "react"; 

import { createRoot } from 'react-dom/client';
import './App.scss';
import Index from './Components/Index';



function App() {

  return (
    <div className="App">
      <Index />
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(
    <App />
      
);

