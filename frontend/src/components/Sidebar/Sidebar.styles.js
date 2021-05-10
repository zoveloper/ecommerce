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
    padding: 20px, 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 6px;
`
export const MenuItemsContainer =styled.div`


`;
export const MenuItem =styled.div`
    text-align:center;
    padding:  6px 20px;
    font-weight:600;
    color: rgba(19 , 15 ,64)

`;
