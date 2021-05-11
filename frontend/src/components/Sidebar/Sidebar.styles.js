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
        url(${props => props.backgroundImage});
    background-size:cover ;
    background-repeat: no repeat;
    background-position:center center;
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
    color: rgba(19 , 15 ,64);

    &:after { 
        content:'';
        border: 1px solid rgba(225, 112, 85);
        display: block;
        margin: 8px 0 4px;
    }

`;

export const Text =styled.p`
    display: inline

`
