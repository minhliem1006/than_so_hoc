import './App.css';
import './style.css';
import Result from './components/result/Result';
import Header from './components/header/Name';
import Home from './components/homepage/Home';
import pitagoImg from './pytago.jpg'
import { useState } from 'react';
function App() {
  const [show,setShow]= useState(false)
  // const [loading,setLoading]= useState(false)
  const [fullInfo,setFullInfo]= useState({});
  // console.log(show);
  const info = {
    name:"Hồ Minh Liêm",
    birthDay:" 10/06/1995",
  }
  // let body=null;
    
  // if(show)
  // {  
  //     body = <Result info={fullInfo}/>
  // }
  // else{
   
  //   body=<Home fullInfo={fullInfo} setFullInfo={setFullInfo} setShow={setShow}/>
  // }
  return (
    <div className='App'>
      <div className='imgContain'>
        <div className='imgCotain__'>
         <img className='imgHeader' src={pitagoImg}/>
        </div>
      </div>
      <Header/>
      {show? <Result info={fullInfo}/>:<Home fullInfo={fullInfo} setFullInfo={setFullInfo} setShow={setShow}/>}
    </div>
  );
}

export default App;
