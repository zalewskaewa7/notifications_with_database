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
        this.showNewDataBase = this.props.showNewDataBase.bind(this);
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
    showNewData(){
        axios.get("/api/notifications").then((response) => {
            let notifications = response.data;
            notifications.reverse();
            this.setState({ 
                datas: notifications,
             });
        });

        this.showNewDataBase();

    }
    render() {
  return (
    <div className="componentNotifications">
        
        {
        this.state.datas.map((item, index) =>{
            return(
                <div className="notificationElement"  style={{backgroundColor: item.ifRead ? "" :  "hsl(210, 60%, 98%)"}} key={index}>
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
            )
        }
        )
        }
        </div>
  )
}
}

export default Notification