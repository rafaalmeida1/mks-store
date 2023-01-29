import styled from "styled-components"

export const SuccessContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10rem auto;
    height: 656;

    strong {
        font-size: 1rem;
        color: ${({theme}) => theme.black};
        margin-top: 1rem;
    };

    img {
        border-radius: 1000px;
        transition: all 0.2s ease-in-out;

        &:hover {
            scale: 1.1;
        }
    }

    span {
        font-size: 1rem;
        color: ${({theme}) => theme.gray500};
        max-width: 560;
        text-align: center;
        margin-top: 0.5rem;
        line-height: 1.4;

        > a {
        color: ${({theme}) => theme.gray500};
        text-decoration: none;
        font-weight: bold;

        transition: color 0.2s linear;

        &:hover {
            color: ${({theme}) => theme.blue};
        };
    };
    };

    > a {
        margin-top: 3rem;
        display: block;
        font-size: 1rem;
        color: ${({theme}) => theme.blue};
        text-decoration: none;
        font-weight: bold;

        &:hover {
          opacity: 0.8;
        };
    };
`