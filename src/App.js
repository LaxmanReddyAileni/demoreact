import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state={image:''}
  }

  state={
    seletedFile:null
  }

selectFileTransfer=event=>{
 this.setState({
   seletedFile:event.target.files[0]
 })
}

fileUploadHandler=()=>{
  const fd=new FormData();
  fd.append('image',this.state.seletedFile,this.state.seletedFile.name);
   axios.post('http://ptsv2.com/t/1586525471',fd,{
     onUploadProgress:progressEvent=>{
       console.log('Upload Progress: '+Math.round(progressEvent.loaded/progressEvent.total*100)+'%')
     }
   })
      .then(res=>{
     console.log(res);
   });
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Demo</h1>
        </header>
        <p className="App-intro">
         This  is a Demo Project
        </p>
        <input style={{display:'none'}} type="file" onChange={this.selectFileTransfer} ref={fileInput=>this.fileInput=fileInput}/>
        <button onClick={()=>this.fileInput.click()}>Pick File</button>
        <button onClick={this.selectFileTransfer}>Upload</button>
      </div>
    );
  }
}

export default App;


  // onChange(e){
  //   // let files=e.target.files;
  //   // //File Reader
  //   // let reader= new FileReader();//To read the data
  //   // reader.readAsDataURL(files[0]);
  //   // //check file is loaded or not
  //   // reader.onload=(e)=>{
  //   //   //hit the API here with data
  //   //   console.warn("img data",e.target.result);
    
  //   // //url to hit
  //   // const url="";
  //   // const formData={file:e.target.result}
  //   // return post(url,formData)
  //   // .then(response=>console.warn("result",response))
  //   // }
  // }
