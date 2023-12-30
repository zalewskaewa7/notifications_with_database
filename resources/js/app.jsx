import React, { useState } from "react"; 
import { Provider } from 'react-redux';
import { store } from './src/app/redux/store';

import { createRoot } from 'react-dom/client';
import './App.scss';
import Header from './Components/Header';
import Notification from './Components/Notification';
import AddNotification from "./Components/AddNotification";
import axios from "axios";


function App() {
  const[showFormAddNotification, setShowFormAddNotification] = useState(false);
  const[newData, setNewData]=useState(true);
  
  function showForm(){
    setShowFormAddNotification(!showFormAddNotification);
  }
   

  function closeForm(){
    setNewData(false);
    setShowFormAddNotification(!showFormAddNotification);
  }

  function showNewDataBase(){
    setNewData(true);

  }
  
  return (
    <div className="App">
      { showFormAddNotification ? <AddNotification  showForm={showForm} closeForm={closeForm}/> : ""}
        <Header showForm={showForm}/>
      
      <main>
        <Notification newData={newData} showNewDataBase={showNewDataBase}/> 

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

