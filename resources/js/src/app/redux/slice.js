import { createSlice } from '@reduxjs/toolkit';
import Mark from "../../components/assets/images/avatar-mark-webber.webp"
import Angela from "../../components/assets/images/avatar-angela-gray.webp"
import Jacob from "../../components/assets/images/avatar-jacob-thompson.webp"
import Rizky from "../../components/assets/images/avatar-rizky-hasanuddin.webp"
import Kimberly from "../../components/assets/images/avatar-kimberly-smith.webp"
import Nathan from "../../components/assets/images/avatar-nathan-peterson.webp"
import Anna from "../../components/assets/images/avatar-anna-kim.webp"
import commentedPicture from "../../components/assets/images/image-chess.webp"



export const initialState = {
  notifications: [
    {
    avatarSrc: Mark,
    autor: "Mark Webber",
    reaction: "reacted to your recent post",
    postTitle: "My first tournament today!",
    group: "",
    message: "",
    commentedPicture: "",
    data: "1m ago",
    ifRead: false,
},
{
    avatarSrc: Angela,
    autor: "Angela Gray",
    reaction: "followed you",
    postTitle: "",
    group: "",
    message: "",
    commentedPicture: "",
    data: "5m ago",
    ifRead: false,

},
{
    avatarSrc: Jacob,
    autor: "Jacob Thompson",
    reaction: "has joined your group",
    postTitle: "",
    group: "Chess Club",
    message: "",
    commentedPicture: "",
    data: "1 day ago",
    ifRead: false,

},
{  
    avatarSrc: Rizky,
    autor: "Rizky Hasanuddin",
    reaction: "sent you a private message",
    postTitle: "",
    group: "",
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    commentedPicture: "",
    data: "5 days ago",
    ifRead: true,

},
{    
    avatarSrc: Kimberly,
    autor: "Kimberly Smith",
    reaction: "commented on your picture",
    postTitle: "",
    group: "",
    message: "",
    commentedPicture: commentedPicture,
    data: "1 week ago",
    ifRead: true,

},
{
    avatarSrc: Nathan,
    autor: "Nathan Peterson",
    reaction: "reacted to your recent post",
    postTitle: "5 end-game strategies to increase your win rate",
    group: "",
    message: "",
    commentedPicture: "",
    data: "2 weeks ago",
    ifRead: true,

},
{   
    avatarSrc: Anna,
    autor: "Anna Kim",
    reaction: "left the group",
    postTitle: "",
    group: "Chess Club",
    message: "",
    commentedPicture: "",
    data: "2 weeks ago",
    ifRead: true,

}],
notReaded: 3,
}

export const slice = createSlice({
  name: "readed",
  initialState,
  reducers: {
markAsReaded: (state, action) => {
    state.notifications.map(x => x.ifRead = true);
    state.notReaded = 0;
},

  },

})


export const { markAsReaded } = slice.actions

export default slice.reducer