import React from "react";

const MessageUser = ({user,handleChange})=>{
    
    
    return(
            user.map((item)=>{   
              return(     
              <div className="media media-chat media-chat-reverse">
                <div className="media-body">
                  <p>{item}</p>
                  <p className="meta"><time dateTime="2018">00:06</time></p>
                </div>{handleChange}
              </div>
              )
            })  
          );  
}
export default MessageUser;