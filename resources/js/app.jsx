import React from "react"; 
import { Provider } from 'react-redux';
import { store } from './src/app/redux/store';

import { createRoot } from 'react-dom/client';
import './App.scss';
import Header from './Components/Header';
import Notification from './Components/Notification';

function App() {
  
  return (
    <div className="App">
    
        <Header />
      
      <main>
        <Notification/> 

      </main>
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container); 
// root.render(<App />);
root.render(
  <Provider store={store}>
      <App />
    </Provider>
);

