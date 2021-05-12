import React,{useState} from 'react'
import * as s from './Sidebar.styles'

const Sidebar = props =>{
    const { 
        backgroundImage='',
        SidevarHeader='', 
        menuItems=[] 
    } = props;

    // state
    const[selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const handleMenuItemClick= name => {
        setSelectedMenuItem(name)
    }



    const menuItemsJSX = menuItems.map((item, index) =>{
        const isItemSelected = selected === item.name;

        return(
        <s.MenuItem 
        key={index}
        selected={isItemSelected}
        onClick={() => handleMenuItemClick(item.name)}

        >
            <s.Text>{item.name} </s.Text>
        </s.MenuItem>
        )
    });

    return(
    <s.SidebarContainer backgroundImage={ backgroundImage }>
        <s.SidebarHeader>{SidevarHeader}</s.SidebarHeader>
        <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
        <s.TogglerContainer>
            <s.Toggler />
        </s.TogglerContainer>
    </s.SidebarContainer>
    )
}

export default Sidebar