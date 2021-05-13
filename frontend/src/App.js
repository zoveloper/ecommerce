import React from 'react';
import * as s from './App.styles';

// components
import Sidebar from './components/Sidebar/Sidebar'
import MainView from './components/MainView/MainView'

const App =() =>{

  const backgroundImage = 'images/coffee.jpg';
  const sidebarHeader = {
    fullName:'kimanaroom',
    shortName: 'kim'

  };
  const menuItems = [
    {name: 'Home', to: '/', icon:''},
    {name: 'Shop', to: '/Shop', icon:''},
    {name: 'About', to: '/About', icon:''},
  ];

  return( 
    <s.App>
      <Sidebar 
        backgroundImage ={backgroundImage}
        sidebarHeader = {sidebarHeader}
        menuItems = {menuItems}
      />
      <MainView/>
    </s.App>
  );
}

export default App;