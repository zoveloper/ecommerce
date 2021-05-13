import React from 'react';
import * as s from './App.styles';

// components
import Sidebar from './components/Sidebar/Sidebar'


const App =() =>{

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
        sidebarHeader = {sidebarHeader}
        menuItems = {menuItems}
      />
    </s.App>
  );
}

export default App;