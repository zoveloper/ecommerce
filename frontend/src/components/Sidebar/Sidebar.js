import React,{useState, useEffect} from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import * as s from './Sidebar.styles'

const Sidebar = props =>{
    const { 
        sidebarHeader={
            fullName:'',
            shortName:' '

        }, 
        menuItems=[] 
    } = props;

    // state
    const[selected, setSelectedMenuItem] = useState(menuItems[0].name);
    
    //mobilemode
    const [isMobile,setisMobile] = useState(false)
    const[isSidebarOpen, setSidebarState] = useState(true)
    const [isOpen, setOpen] = useState(false)

    //Effect
    //update of header state
    useEffect(() => {
        isMobile? setSidebarState(true): setSidebarState(false)

    }, [isMobile ])
    
    const handleMenuItemClick = name => {
        setSelectedMenuItem(name)
    }
    //Update of sidebar state
    
    useEffect(()=>{
    const updateWindowWidth =()=>{
        if(window.innerWidth > 700) setisMobile(true)
        else setisMobile(false)
        
    }
    window.addEventListener('resize',updateWindowWidth)
    })



    const menuItemsJSX = menuItems.map((item, index) =>{
        const isItemSelected = selected === item.name;
        //console.log(item.name)
        //console.log(selected)
        console.log(isSidebarOpen)
        return(
        <s.MenuItem 
        key={index}
        selected={isItemSelected}
        onClick={() => handleMenuItemClick(item.name)}
        isSidebarOpen={isSidebarOpen}
        >
            <s.Text isSidebarOpen={isSidebarOpen}>{item.name} </s.Text>
        </s.MenuItem>
        )
    });
    
    return(
    <s.Wrapper>
        {!isMobile ? (
        <s.MobileContainer 
        isOpen={isOpen}
        >
            <s.MobileSidebarHeader 
            isSidebarOpen ={isSidebarOpen}
            >
                {sidebarHeader.fullName}
            </s.MobileSidebarHeader >
        <s.MobileMenuItemContainer>
            {menuItemsJSX}
            </s.MobileMenuItemContainer>
        <s.TogglerContainer
        onClick= {()=>(setSidebarState(!isSidebarOpen))}
        >
        <Hamburger 
        toggled={isOpen} 
        toggle={setOpen} rounded/>
        </s.TogglerContainer>
        </s.MobileContainer>) :(
        <s.SidebarContainer 
        isSidebarOpen ={isSidebarOpen}
        isMobile={isMobile} 
        isOpen={isOpen}
        >  
        <s.SidebarHeader>
            {sidebarHeader.fullName}
            </s.SidebarHeader>
        <s.MenuItemContainer>
            {menuItemsJSX}
            </s.MenuItemContainer>
        
    </s.SidebarContainer>
    )}
    
    </s.Wrapper>
    
    
    )
}

export default Sidebar