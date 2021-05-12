import styled from '@emotion/styled'

export const SidebarContainer = styled.div`
    width: 20%;
    max-Width: 280px;
    min-Width: 80px;
    color: blue;
    background-image: linear-gradient(
        315deg, 
        rgba(255,255,255,0.1) 0%,
        #eec0c6 74%),
        url(${p => p.backgroundImage});
    background-size:cover ;
    background-repeat: no repeat;
    background-position:center center;

    position: relative; // Toggler
`

export const SidebarHeader = styled.h3`
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 6px;
`
export const MenuItemContainer =styled.div`


`;
export const MenuItem =styled.div`
    text-align:center;
    padding: 6px 10px;
    font-weight:600;
    color: ${p => p.selected ? ' rgba(225, 225, 225)' : ' rgba(19, 15, 64)'};
    &:hover{
        color:rgba(225, 225, 225);
        transition: .1s ease-in all;
    }

    &:after { 
        content:'';
        border: 1px solid ${p => p.selected ? ' rgba(225, 225, 225)' : ' rgba(225, 112, 85)'};
        display: block;
        margin: 8px 0 4px;
    };

    ${p =>!p.selected &&`
        &:hover{
            &:after{
                border:1px solid rgba(225, 225, 225,0.2);
                transition: .1s ease-in all;
            }
        }
    
    `}

`;

export const Text =styled.p`
    display: inline

`
//Toggler ------------------------

export const TogglerContainer = styled.div`
    position: absolute;
    width: 30%;
    bottom:10%;
    left: 0;
    right: 0;
    margin: 0 auto;

`
export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    position: relative;

    &:after { 
        content:'';
        position: absolute;
        left: 0;
        top: .25em;
        width: 100%;
        height: .1em;
        background: #fff;
        box-shadow:
        0 .75em 0 0 #fff,
        0 1.5em 0 0 #fff;
    };
    

`