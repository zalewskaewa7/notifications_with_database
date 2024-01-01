import React from 'react'
import "./scss/notification.scss"
import "../App.scss";
import axios from "axios";


class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
        }
       
    }
    
    componentDidMount() {
        axios.get("/api/notifications").then((response) => {
            let notifications = response.data;
            notifications.reverse();
            this.setState({ datas: notifications });
        });
    }

    componentDidUpdate(){
        if(this.props.newData){
            axios.get("/api/notifications").then((response) => {
                        let notifications = response.data;
                        notifications.reverse();
                        this.setState({ 
                            datas: notifications,
                        });
                    });
        }
        
    }
    deleteNotification(){
        let data = new FormData();
        data.append("message", e);
        data.append("filesArray", this.state.arrayFileNames);
        data.append("_method", "POST");
        axios.post("/api/delete/" + e.id, data).then((response) => {
            const arrayDB = response.data;
            return this.setState({ datas: arrayDB });
        });
    }
    
    render() {
  return (
    <div className="componentNotifications">
        
        {
        this.state.datas.map((item, index) =>{
            return(
                <div className="notificationElement"  style={{backgroundColor: item.ifRead ? "" :  "hsl(210, 60%, 98%)"}} key={index}>
                    <div className="notification">
                        <img className="avatarImg" src={item.avatarSrc} alt={item.autor}/>
                        <div className="content">
                            <div className="mainText">
                                <span className="author">{item.autor}</span>
                                
                                <span className="reaction"> {item.reaction} </span>
                                <span className="postTitle">{item.postTitle}</span>
                            
                                
                                <span className="group">{item.group}</span>
                                <span className={item.ifRead ? "" : "notRead"}></span>
                                
                                {item.commentedPicture ? 
                                    <img className="commentedPicture" src={item.commentedPicture} alt={item.autor}/>
                                            : ""
                                }
                            </div>
                            <div className="data">{item.data}</div>

                            <div className={item.message ? "message" : ""}>{item.message}</div>
                        </div>
                    </div>
                    <button onClick={() => this.deleteNotification()}>Delete</button>
                </div>
            )
        }
        )
        }
        </div>
  )
}
}

export default Notification