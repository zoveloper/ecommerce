import React from 'react';
import * as s from './App.styles';

// components
import Sidebar from './components/Sidebar/Sidebar'
import MainView from './components/MainView/MainView'

const App =() =>{

  const backgroundImage = 'images/coffee.jpg';
  const SidevarHeader = "kimanaroom";
  const menuItems = ['Home', 'Shop', 'About'];
  return( 
    <s.App>
      <Sidebar 
        backgroundImage ={backgroundImage}
        SidevarHeader = {SidevarHeader}
        menuItems = {menuItems}
      />
      <MainView/>
    </s.App>
  );
}

export default App;