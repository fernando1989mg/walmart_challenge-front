import styled from 'styled-components'

const Container = styled.div`
    height: 420px;
    min-height: 420px;
    width: 300px;
    padding: 10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
`;

const Content = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding: 10px;
    ${({backgroundColor}) => backgroundColor && `background-color:${backgroundColor}`};
`;

const Image = styled.img`
    width: 80%;
`;

const Section = styled.div`
    width: 100%;
    display:flex;
    ${({flexDirection}) => flexDirection && `flex-direction:${flexDirection}`};
`;

export const Card = {
    Content,
    Container,
    Image,
    Section
}