import styled from "styled-components"

export const SuccessContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10rem auto;
    height: 656;

    h1 {
        font-size: 1.5rem;
        color: ${({theme}) => theme.black};
    };

    p {
        font-size: 1rem;
        color: ${({theme}) => theme.gray300};
        max-width: 560;
        text-align: center;
        margin-top: 2rem;
        line-height: 1.4;
    };

    a {
        margin-top: 5rem;
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

export const ImagesContainer = styled.section`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;

    div + div {
        margin-left: calc(-140px / 2)
    }
`

export const ImageContainer = styled.div`
    width: 140;
    height: 140;
    background: "linear-gradient(180deg; #1ea483 0%; #7465d4 100%)";
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.8);
    border: 50%;
    position: relative;
    transition: all 0.2s linear;
    scale: 0.9;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        object-fit: cover;
    };

    &:hover {
        z-index: 2;
        scale: 1
    }
`