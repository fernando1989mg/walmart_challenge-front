
import styled from 'styled-components'
import {ArrowBackCircle} from '@styled-icons/ionicons-solid/ArrowBackCircle'
import {ArrowForwardCircle} from '@styled-icons/ionicons-solid/ArrowForwardCircle'

const cssBase = () => {
    return `
        width:50px;
        height:50px;
        border-radius:50%;
        color:white;
        font-weight:bold;
        display:flex;
        align-items: center;
        font-size:20px;
        justify-content: center;
    `;
}

const Container = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    margin-bottom:50px;
    > * {
        margin-left:10px;
    };
`;

const Next = styled(ArrowForwardCircle)`
    color:#0071CE;
    font-weight:bold;
    cursor: pointer;
`;

const Prev = styled(ArrowBackCircle)`
    color:#0071CE;
    font-weight:bold;
    cursor: pointer;
`;

const Page = styled.div`
    ${cssBase()}
    background-color:#ccc;
    cursor: pointer;
`;

const ActivePage = styled.div`
    ${cssBase()}
    background-color:#0071CE;
`;

export const Paginator = {
    Container,
    Next,
    Prev,
    Page,
    ActivePage
}