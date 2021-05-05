import React, {useState} from 'react'
import { Cross as Hamburger } from 'hamburger-react'


function Mobile() {
    const [isOpen, setOpen] = useState(false)
    console.log(isOpen)
    return (
        <Hamburger 
            toggled={isOpen}
            toggle={setOpen}
        >
        </Hamburger>
    );
}


export default Mobile;