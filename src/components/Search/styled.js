import styled from 'styled-components'

const Container = styled.div`
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

    > form{
        margin-left:20px;
        width: 100%;
        display: flex;
        position: relative;
        border-radius:20px;
        background-color:white;
        padding-left:15px;
        margin-right:10px;
        
        input[type=search] {
            width: 90%;
            height: 45px;
            box-shadow: none !important;
            outline: none;
            appearance: none;
            border: none;
            padding: 0 20px;
            border-color: #c2c2c2;
            border-radius:20px;
        }

        input[type=button] {
            box-shadow: none !important;
            outline: none;
            appearance: none;
            border: none;
            background:none;
            cursor: pointer;
        }
    }

`;

export const Search = {
    Content,
    Container
}