import React, { useState } from 'react'
import "./scss/addNotifications.scss"

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
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }
    

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    render() {
  return (
    <div className="addNotificationsComponent">
        <h2>Nowe powiadomienie</h2>
        <form>
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
            
        </form>
    </div>
  )
}
}

export default AddNotification