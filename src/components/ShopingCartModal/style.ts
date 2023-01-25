import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

const backgroundAnimation = keyframes`
  from {
      backgroundPosition: -500px 0;
  }

  to {
      background-position: calc(500px + 100%) 0;
  }
`;

export const OverlayModal = styled(Dialog.Overlay)`
  display: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: transparent;
`;

export const ShoppingCartContent = styled(Dialog.Content)`
  min-height: 100vh;
  max-width: 486px;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: auto;

  background: ${({ theme }) => theme.blue};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 484px) {
    max-width: 90%;
  }

  > div {
    padding-left: 3.75rem;
    padding-right: 3.75rem;

    @media (max-width: 484px) {
      padding-left: 2.75rem;
      padding-right: 2.75rem;
    }

    h2 {
      font-size: 27px;
      line-height: 36px;
      font-weight: bold;
      color: ${({ theme }) => theme.white};
      font-style: normal;
      margin-bottom: 64px;
    }
  }
`;

export const CloseModal = styled(Dialog.Close)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 0;
  background-color: ${({ theme }) => theme.black};
  border: 0;
  border-radius: 100%;
  color: ${({ theme }) => theme.white};
  font-size: 28px;
  line-height: 15px;

  cursor: pointer;
`;

export const ProductInCart = styled.div`
  max-width: 100%;
  background: ${({ theme }) => theme.white};
  border-radius: 8px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);

  padding: 12px 12px 12px 10px;
  position: relative;

  > button {
    position: absolute;
    top: -8%;
    right: -3%;
    width: 25px;
    height: 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    line-height: 0;
    background-color: ${({ theme }) => theme.black};
    border: 0;
    border-radius: 100%;
    color: ${({ theme }) => theme.white};
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;

    cursor: pointer;

    @media (max-width: 484px) {
      background: transparent !important;
      color: ${({theme}) => theme.black};
      line-height: 17px;
      font-size: 30px;
      top: 7%;
      right: 7%;
    }
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    object-fit: contain;

    transition: scale 0.2s linear;
    margin-right: 5px;

    &:hover {
      scale: 1.1;
    }
  }

   > span {
    width: 20%;
    font-size: 15px;
    font-weight: 400;
    line-height: 17px;
    color: ${({ theme }) => theme.gray500};
    margin-right: 10px;
  }

  @media (max-width: 484px) {
    flex-direction: column;
    justify-content: center;
    padding: 12px 0;

    img {
      object-fit: contain;
      max-width: 150px;
      max-height: 101px;
      width: 100%;
      height: 100%;
    }

    > span {
      width: 100%;
      text-align: center;
      font-size: 16px;
      line-height: 19px;
      margin-top: 1rem;
    }
  }
`;

export const SetQuantity = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  span {
    font-size: 10px;
    line-height: 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.black};
  }

  strong {
    font-size: 14px;
    font-weight: bold;
    line-height: 17px;
    color: ${({ theme }) => theme.black};
    margin-left: auto !important;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    gap: 0.2rem;
    margin-left: 0.5rem;

    > section {
      padding: 4px 4px;
      border: 1px solid ${({ theme }) => theme.gray300};
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 0.1em;
      margin-right: auto !important;

      button {
        width: 100%;
        height: 100%;
        border: 0;
        background: transparent !important;
        color: ${({ theme }) => theme.black};
        font-size: 8px;
        cursor: pointer;
        scale: 1.4;
      }

      span {
        border-right: 1px solid ${({ theme }) => theme.gray300};
        border-left: 1px solid ${({ theme }) => theme.gray300};
        padding: 0 4px;
        font-size: 8px;
        font-weight: 400;
        line-height: 10px;
        color: ${({ theme }) => theme.black};
        scale: 1.2;
      }
    }
  }

  @media (max-width: 484px) {
    margin-top: 0.5rem;
    padding: 0 12px;
    width: 100%;
    display: flex; 
    justify-content: space-between;

    div > span {
      display: none;
    }

    div > section {
      height: 34.5px;
      border-radius: 5px;

      span {
        font-size: 14px;
      }
      
      button {
        font-size: 16px;;
      }
    }

    strong {
      background-color: ${({theme}) => theme.gray600};
      padding: 0.5rem;
      border-radius: 5px;
      height: 34.5px;
      color: ${({theme}) => theme.white};
    }
  }
`;

export const ResumeCart = styled.div`
  width: 100%;
  margin-top: auto !important;
  padding: 0 !important;

  > div {
    padding: 0 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 42px;
    margin-top: 1.5rem;

    strong {
      font-size: 28px;
      font-weight: 700;
      line-height: 15px;
      color: ${({ theme }) => theme.white};
    }
  }

  button {
    width: 100%;
    background-color: ${({ theme }) => theme.black};

    color: ${({ theme }) => theme.white};
    padding: 39px 0 43px 0;
    font-weight: bold;
    font-size: 28px;
    line-height: 15px;
    border: 0;

    cursor: pointer;

    transition: background-image 0.5s;

    &:hover {
      animation: ${backgroundAnimation} 1300ms infinite ease-in-out;
      background-image: linear-gradient(90deg, #000, #111, #000);
    }
  }
`;
