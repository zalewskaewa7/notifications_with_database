import React from 'react'
import "./scss/notification.scss"
import "../App.scss";
import { useSelector } from 'react-redux';





function Notification(props) {
    const notifications = useSelector((state) => state.readed.notifications)
    

  return (
    <div className="componentNotifications">

        {
        notifications.map((item, index) =>{
            return(
                <div className="notificationElement"  style={{backgroundColor: item.ifRead ? "" :  "hsl(210, 60%, 98%)"}} key={index}>
                    <img className="avatarImg" src={item.avatarSrc} alt={item.autor}/>
                    <div className="content">
                        <div className="mainText">
                            <span className="author">{item.autor}</span>
                            
                            <span className="reaction"> {item.reaction} </span>
                            <span className="postTitle">{item.postTitle}</span>
                        
                            
                            <span className="group">{item.group}</span>
                            <span className={item.ifRead ? "" : "notRead"}>{item.ifRead}</span>
                            
                            {item.commentedPicture ? 
                                 <img className="commentedPicture" src={item.commentedPicture} alt={item.autor}/>
                                        : ""
                            }
                        </div>
                        <div className="data">{item.data}</div>

                        <div className={item.message ? "message" : ""}>{item.message}</div>
                    </div>
                </div>
            )
        }
        )
        }
        </div>
  )
}

export default Notification