
import React from 'react';
// import AboutUS from './components/AboutUS';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './Alert';
import { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#abafff";
      showAlert("Dark-mode Enabeled", "success");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light-mode Enabeled", "success");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }
  }
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
  }, 1000);
  }
  return (
    <>
      <Navbar title="Text-Utilities" about="Know US" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {<div div className="container">
        <TextForm showAlert={showAlert} heading="Enter Text here to anaylize" ></TextForm>
      </div>}

    </>
  );
}

export default App;
