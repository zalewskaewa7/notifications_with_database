import React from 'react'
import "./scss/header.scss"
import { useDispatch, useSelector } from 'react-redux';

import { markAsReaded } from "./app/redux/slice";
import AddNotification from './AddNotification';

function Header() {
  const notReaded = useSelector((state) => state.readed.notReaded)
  const dispatch = useDispatch()

  function markReaded(){
   dispatch(markAsReaded());
  }
  
  return (
    <header>
      <AddNotification />
        <div className="notification">
            <h1>Notifications <span>{notReaded}</span></h1>
        
        </div>
        
        <div className="markAsRead" onClick={() => markReaded()}>Mark all as read</div>
    </header>
  )
}

export default Header