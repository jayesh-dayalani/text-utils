import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // const [mode,setMode] = useState("light")
  // const [navText,setnavText] = useState("dark")
  const toggleMode = () => {
    // if(mode === 'light'){
    //   setMode('dark')
    //   setnavText('light')
    //   // document.html.style.data.bs.theme = 'dark'
    // }
    // else{
    //   setMode('light')
    //   setnavText('dark')
    // }

    if (document.documentElement.getAttribute('data-bs-theme') === 'light') {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
      showAlert("Dark mode enabled", "light")
    }
    else {
      document.documentElement.setAttribute('data-bs-theme', 'light')
      showAlert("Light mode enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)

  }

  return (
    <>
      <Router>
        {/* indivisually setting dark theme */}
        {/* <Navbar title='Text Utils' mode={mode} toggleMode={toggleMode} navText={navText}/>
            <TextForm  heading="Enter to analyze" mode={mode} navText={navText}/> */}

        {/* directly setting from bs docs */}
        <Alert alert={alert} />
        <Navbar title='Text Utils' toggleMode={toggleMode} />

        <Routes>
          {/* exact route will match the exact url */}
          {/* or else partial match will render base components too */}
          <Route exact path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter to analyze" showAlert={showAlert}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
