import styled from '@emotion/styled'

export const MainContainer = styled.div`
    display: flex;
    background: red;
`
export const SidebarContainer = styled.div`
    ${p=> p.isSidebarOpen ? ('width: 100%') : ('width: 0%')};
    display: flex;
    flex-direction:column;
    height: 100%
    color: blue;
    background: pink;
    
    position: relative; // Toggler
    transition: .3s ease-in all
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
    ${p => !p.isOpen &&`
    text-align:center;
    `}
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
//Toggler ------------------------

export const TogglerContainer = styled.div`
    display: ${p => !p.isMobile ? 'block':'none'};
    position: absolute;
    width: 30%;
    bottom:10%;
    left: 0;
    right: 0;
    margin: 0 auto;

`