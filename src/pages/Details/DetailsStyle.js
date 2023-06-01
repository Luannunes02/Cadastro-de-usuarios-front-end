import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    max-height: 100vh;
    margin: 20px auto 0;
    padding: 20px 20px;
    background-color: #212121;
    border-radius: 23px 12px 29px 17px;

    h1 {
        font-size: 32px;
        color: #fff;
        margin-top: 5px;
    }

    .buttons-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;


        a {
        text-decoration: none;
        width: fit-content;
        font-size: 15px;
        background-color: red;
        color: #fff;
        padding: 10px 20px;
        margin-top: 20px;
     }
    }
    
`