import styled from 'styled-components'

const Body = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    padding-top:10px;
`;

const Content = styled.div`
    display:flex;
    align-items: center;
    flex-direction:row;
    ${({width}) => width && `width:${width}`};
    ${({flexWrap}) => flexWrap && `flex-wrap:${flexWrap}`};
    ${({justifyContent}) => justifyContent && `justify-content:${justifyContent}`};
`;

export const Home = {
    Body,
    Content
}