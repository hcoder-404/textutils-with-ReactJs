import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FromText from './components/FromText';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({message: message, type: type})
    setTimeout(() => {
      setAlert(null);
    },1500);
  } 

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success"); 
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <FromText showAlert={showAlert} mode={mode} />
    </div>
    </>
  );
}

export default App;
