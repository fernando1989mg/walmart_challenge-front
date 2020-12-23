import styled from 'styled-components'

const Container = styled.div`
    background-color: #F0F0F0;
    width: 100%;
    padding: 0;
    display:flex;
    flex-direction:column;
    height: 100%;
`;

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
    padding-left:20px;
    padding-right:20px;
    ${({width}) => width && `width:${width}`};
    ${({flexWrap}) => flexWrap && `flex-wrap:${flexWrap}`};
    ${({justifyContent}) => justifyContent && `justify-content:${justifyContent}`};
`;

export const Result = {
    Content,
    Container,
    Body
}