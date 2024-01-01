import React, { useState } from "react"; 
import '../App.scss';
import Header from './Header';
import Notification from './Notification';
import AddNotification from "./AddNotification";

function Index() {
    const[showFormAddNotification, setShowFormAddNotification] = useState(false);
    const[newData, setNewData]=useState(false);
    
    function showForm(){
      setShowFormAddNotification(!showFormAddNotification);
    }
     
  
    function closeForm(){
      setNewData(true);
      setShowFormAddNotification(!showFormAddNotification);
    }
  
    function newDataFalse(){
      setNewData(false);
    }
    
    
    return (
      <div className="Index">
        { showFormAddNotification ? <AddNotification  showForm={showForm} closeForm={closeForm}/> : ""}
          <Header showForm={showForm} newData={newData} newDataFalse={newDataFalse}/>
        
        <main>
          <Notification newData={newData}/> 
  
        </main>
      </div>
    );
  }

export default Index