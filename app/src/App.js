import logo from './logo.svg';
import './App.css';
import algosdk from 'algosdk'
import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      address:""
    }
  }

  hexToBytes = (hex = []) => {
    let bytes = []
  
    for (let c = 0; c < hex.length; c += 2){
    bytes.push(parseInt(hex.substr(c, 2), 16))}
  
  console.log(bytes)
  
  this.setState({address: algosdk.encodeAddress(bytes)})
  }


  render(){
    return(<div>
      <input id="hex"></input>
      <button onClick={()=>{this.hexToBytes(document.getElementById("hex").value)}}>
        Convert
      </button>
      <h4>{this.state.address}</h4>
    </div>)
  }

}


export default App;
