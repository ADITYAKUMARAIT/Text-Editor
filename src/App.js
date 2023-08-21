// import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About'

function App() {
  const [mode,setMode] = useState('light');
  const [alert ,setalert] = useState(null);
  const showalert =(message,type)=>{
    setalert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1000);

  }
  const toggleMode =()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert("light mode is enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showalert("dark mode is enabled","success");
    }
  }
  return (
    <>
      <Navbar title="Textutils" about="About"  mode={mode}  toggleMode ={toggleMode}/>
      <Alert  alert ={alert}/>
      <div className="container"><TextForm heading="Enter the text to analyze below" mode={mode} showalert={showalert} /></div>
      {/* <About/> */}
    </>
  );
}

export default App; 
