import React from 'react'
import * as s from './Sidebar.styles'

const Sidebar = props =>{
    const { 
        backgroundImage='',
        SidevarHeader='', 
        menuItems=[] 
    } = props;
    
    const menuItemsJSX = menuItems.map((item, index) =>{
        return(<s.MenuItem key={index}>{item}</s.MenuItem>
        )
    })


    return(
    <s.SidebarContainer backgroundImage={ backgroundImage }>
    <s.SidebarHeader>{SidevarHeader}</s.SidebarHeader>
    <s.MenuItemsContainer>{menuItemsJSX}</s.MenuItemsContainer>
    </s.SidebarContainer>
    )
}

export default Sidebar