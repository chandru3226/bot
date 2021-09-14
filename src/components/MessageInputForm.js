import React,{useState} from "react";

const MessageInputForm = ({user,handleChange})=>{
    const [data,setData] = useState("");
    const inputHandler=()=>{
        if(data===""||data.length===0){
            alert("enter valid data");
        }
        else
        user.push(data);
        setData("");
        handleChange();       
    }
    return (
        <div className="publisher bt-1 border-light">
                   <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/> 
                   <input className="publisher-input" type="text" placeholder="Write something" value={data} onChange={(e)=>{setData(e.target.value)}}/>                                        
                   <button className="btn btn-primary" onClick={inputHandler}>Send</button>                  
        </div>
    );
}
export default MessageInputForm;