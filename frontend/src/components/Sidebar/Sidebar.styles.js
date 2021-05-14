import styled from '@emotion/styled'

export const Wrapper = styled.div`
    display: flex;
    width: 100vh;
    height: 100vw;
`
//for web
export const SidebarContainer = styled.div`
    width: 30%;
    background: red;
    flex-direction:column;
    height: 100vh;
    color: blue;
    
    position: relative; // Toggler
    transition: 0.3s;

    @media only screen and (max-width: 700px) {
        position: fixed;
        width: 0;
        right: 0;
        top: 0;
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
        transition: .3s ease-in all;
    }

    &:after { 
        content:'';
        border: 1px solid ${p => p.selected ? ' rgba(225, 225, 225)' : ' rgba(225, 112, 85)'};
        ${p => p.isOpen ? ('display: block') :  ('display: none')};
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
    display: ${p => p.isSidebarOpen ? 'inline': 'none'}

`
// Mobile -----------
export const MobileContainer = styled.div`
    ${p => p.isOpen ? ('width: 100vw'):('width: 0%')};
    display: flex;
    flex-direction: column;
    background: pink;
    height: 100vh;
    transition: 0.3s;
    opacity: 0.7;
`
export const MobileSidebarHeader = styled.div`
    ${p => p.isSidebarOpen ? ('display: block') :  ('display: none')};
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 6px;

`
export const MobileMenuItemContainer = styled.div`
${p => !p.isMobile &&`
    text-align:center;
    `}
    padding: 6px 10px;
    font-weight:600;
    color: ${p => p.selected ? ' rgba(225, 225, 225)' : ' rgba(19, 15, 64)'};
    
    &:hover{
        color:rgba(225, 225, 225);
        transition: .2s ease-in all;
    }

    &:after { 
        content:'';
        border: 1px solid ${p => p.selected ? ' rgba(225, 225, 225)' : ' rgba(225, 112, 85)'};
        ${p => p.isOpen ? ('display: block') :  ('display: none')};
        margin: 8px 0 4px;
    };

`
//Toggler ------------------------
export const TogglerContainer = styled.div`
    display: ${p => !p.isMobile ? 'block':'none'};
    position: absolute;
    top: 1%;
    left: 85%;
    

`