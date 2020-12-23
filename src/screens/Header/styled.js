import styled from 'styled-components'

const Container = styled.header`
    background-color: rgb(8,121,201);
    height: 74px;
    width: 100%;
    padding: 0;
    display:flex;
    justify-content:center;
    align-items: center;
`;

const Content = styled.div`
    width: 100%;
    max-width: 1360px;
    display:flex;
    align-items: center;
`;

export const Header = {
    Content,
    Container
}