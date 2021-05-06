import React from 'react'
import '../App.css';
import logo from '../logo192.png'
import { SidebarData } from './SidebarData'




function Sidebar({show}) {

    return (
            <div className={show ? 'SidebarActive' : 'Sidebar'}>
                <img src={logo} alt="logo" className ="logo"/>
                <ul className="SidebarList">
                {SidebarData.map((val, key)=>{
                    return(
                    <li 
                    key={key} 
                    className ="row"
                    id={window.location.pathname === val.link ? 'active': '' }
                    onClick={() => {
                        window.location.pathname = val.link;
                        }}
                        >
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title }</div>
                        
                    </li>
                    )
                })}
                </ul>
            </div>
    )
}

export default Sidebar


