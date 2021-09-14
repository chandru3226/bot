import React from "react";

const MessageBot = ({botMessages,handleChange})=>{
    
    //console.log(botMessages,"lol")
    return (
        <div className="media media-chat"><img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
            <div className="media-body">
             <p>{botMessages}</p>
             <p className="meta"><time dateTime="2018">00:06</time></p>
            </div>{handleChange}
        </div>
    );
}
export default MessageBot;