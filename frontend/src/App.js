import React ,{useState} from 'react';
import Sidebar from './components/Sidebar'
import './App.css';
import { Cross as Hamburger } from 'hamburger-react'


function App() {
  const [isOpen, setOpen] = useState(false)

  return(
    <div className="App">
      <div className="Hamburger">
      <Hamburger
      toggle={setOpen}
      toggled={isOpen}
      />
      </div>
      <Sidebar show={isOpen} />
      
    </div>
  );
}

export default App;