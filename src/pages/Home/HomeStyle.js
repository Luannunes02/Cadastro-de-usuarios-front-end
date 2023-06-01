import styled from "styled-components";

export const Container = styled.div`
    margin: 20px auto 0;
    padding: 0 20px;
    max-width: 700px;

    article {
        background: #209143;
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px 20px;
        margin-bottom: 20px;

        p {
            font-size: 16px;
            color: #fff;
            margin-top: 5px;
            line-height: 24px;
        }

        a {
            height: 42px;
            border-radius: 5px;
            border: 2px solid black;
            background: none;
            margin-top: 10px;
            color: black;
            font-weight: bold;
            font-size: 16px;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`