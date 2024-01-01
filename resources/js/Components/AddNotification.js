import React, { useState } from 'react'
import "./scss/addNotifications.scss"
import axios from "axios";
import Notification from "./Notification.js";


class AddNotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSrc: "",
            autor: "",
            reaction: "",
            postTitle: "",
            group: "",
            message: "",
            commentedPicture: "",
            data: "",
            datas: [],
        };
        this.onChangeValue = this.onChangeValue.bind(this);
       this.showForm = this.props.showForm.bind(this);
       this.closeForm = this.props.closeForm.bind(this);
    }
    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    validateData(data) {
        if (data.length >= 3) {
            return true;
        } else {
            return false;
        }
    }

   

    addNotification(e){
        e.preventDefault();
        if (
            this.validateData(this.state.avatarSrc) &&
            this.validateData(this.state.autor) &&
            this.validateData(this.state.reaction) &&
            this.validateData(this.state.data)
        ) {
            
            axios
            .post("/api/addnotification", {
                avatarSrc: this.state.avatarSrc,
                autor: this.state.autor,
                reaction: this.state.reaction,
                postTitle: this.state.postTitle,
                group: this.state.group,
                message: this.state.message,
                commentedPicture: this.state.commentedPicture,
                data: this.state.data,

            })

            .then(function (response) {
            
            })

            .catch(function (error) {
                console.log(error);
            });

       
        this.setState({
            avatarSrc: "",
            autor: "",
            reaction: "",
            postTitle: "",
            group: "",
            message: "",
            commentedPicture: "",
            data: "",
        }); 
         this.closeForm();
    } else {
        console.log("Popraw dane do powiadomienia");
    }
    }


    render() {
  return (
    <div className="addNotificationsComponent">
        <h2>Nowe powiadomienie</h2>
        <button className="closeButton" onClick={this.showForm}>x</button>
        <form onSubmit={(e) => this.addNotification(e)}>
            <div >
             <label>Zdjęcie</label>
            <input  type="text" 
                    id="avatarSrc"
                    name="avatarSrc"
                    required
                    className="data"
                    value={this.state.avatarSrc} 
                    onChange={this.onChangeValue}></input> 
            </div>
            
             <div> 
               <label>Autor</label>
            <input  type="text" 
                    id="autor"
                    name="autor"
                    required
                    className="data"
                    value={this.state.autor}
                    onChange={this.onChangeValue}></input> 
            </div>       
            <div>
               <label>Reakcja</label>
            <input  type="text" 
                    id="reaction"
                    name="reaction"
                    required
                    className="data"
                    value={this.state.reaction}
                    onChange={this.onChangeValue}></input> 
            </div>
            <div>
                <label>Tytuł posta</label>
            <input  type="text" 
                    id="postTitle"
                    name="postTitle"
                    className="data"
                    value={this.state.postTitle}
                    onChange={this.onChangeValue}></input>
            </div>
            <div>
              <label>Grupa</label>
            <input  type="text" 
                    id="group"
                    name="group"
                    className="data"
                    value={this.state.group}
                    onChange={this.onChangeValue}></input>  
            </div>
            <div>
                <label>Wiadomość</label>
            <input  type="text" 
                    id="message"
                    name="message"
                    className="data"
                    value={this.state.message}
                    onChange={this.onChangeValue}></input>
            </div>
            <div>
               <label>Skomentowane zdjęcie</label>
            <input  type="text" 
                    id="commentedPicture"
                    name="commentedPicture"
                    className="data"
                    value={this.state.commentedPicture}
                    onChange={this.onChangeValue}></input> 
            </div>
            <div>
                <label>Data</label>
            <input  type="text" 
                    id="data"
                    name="data"
                    required
                    className="data"
                    value={this.state.data}
                    onChange={this.onChangeValue}></input>
            </div>
            <button >Dodaj powiadomienie</button>
        </form>
    </div>
  )
}
}

export default AddNotification