import MessageBot from './components/MessageBot';
import MessageUser from './components/MessageUser';
import './App.css';
import axios from 'axios';
import React from 'react';
import MessageInputForm from './components/MessageInputForm';

const style={
  overflow: "scroll !important", 
  height:"400px !important"
};
 var data=[],content=[];


class App extends React.Component {
  state={
    botMessages:[],
    user: []
  }
  // componentDidMount(){
  //   this.gettingData();    
  // }
 
  //  gettingData = async ()=>{
  //      var res = await axios.get('http://localhost:8080/api/Msgs'); 
  //      let i=0;
  //       for(i=0;i<res.data.length;i++){
  //         data.push(res.data[i].Message.toString());
  //       }
  //       content.push(res.data);
        
  //       //console.log(data,"DB data",content[0]);
  //       this.setState({
  //         botMessages:data
  //       }); 
  // }
  
  contentFinder=()=>{
    if(content.length!==0){
      
      return (
        content[0].map((item,index)=>{
          if(item.Person === "Bot"){
            //console.log(item.Message,"msg")
            return(
              <MessageBot botMessages = {item.Message} handleChange={this.handleChange}/>
            )
          }
          else {
            return(
              <MessageUser user = {this.state.user} handleChange={this.handleChange}/>
            )
          }         
        })
      )    
    }
    else {
      return(
        <div></div>
      )
    }
  }
  handleChange=()=>{
    this.setState({
      user: [...this.state.user]
    });
    console.log("users:",this.state.user)
  }
  
  render() {
    return (
      <div className="App"> 
         <div className="col-md-6">
            <div className="card card-bordered">
                <div className="card-header">
                    <h4 className="card-title"><strong>ChatBot</strong></h4>
                </div>
                <div className="ps-container ps-theme-default ps-active-y" id="chat-content" style={style}>
                  <div className="media media-chat"><img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..."/>
                    <div className="media-body">
                      <p>Welcome!!!</p>
                      <p>How can I assist you?</p>
                      <p className="meta"><time dateTime="2018">00:06</time></p>
                    </div>
                  </div>
                  {
                    this.contentFinder()
                  }
                  
                   
                    <div className="ps-scrollbar-x-rail" style={{left: "0px", bottom: "0px"}}>
                        <div className="ps-scrollbar-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div>
                    </div>
                    <div className="ps-scrollbar-y-rail" style={{top: "0px", height: "0px", right: "2px"}}>
                        <div className="ps-scrollbar-y" tabIndex="0" style={{top: "0px", height: "2px"}}></div>
                    </div>
                </div>
                <MessageInputForm user = {this.state.user} handleChange={this.handleChange}/>
            </div>
        </div>
</div>
);
  }  
}

export default App;
