import styled from "styled-components";
import { colors } from "../../styles/Global";
import { device } from "../../utils/constants/sizes";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  margin-bottom: 13rem;

  img {
    width: 100%;
    height: 545px;
    object-fit: cover;
    top: 0;
    z-index: -1;
  }
`;

export const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 117rem;

  color: ${colors.brown};

  h2 {
    font-family: "Lilita One";
    text-transform: uppercase;
    font-size: 7.7rem;
    margin-bottom: 1rem;

    span {
      color: ${colors.yellow};
    }
  }

  h4 {
    font-size: 2.2rem;
    font-weight: 400;
    margin-bottom: 1.4rem;

    :first-child {
      font-weight: 700;
      margin: 0;
    }

    span {
      font-weight: 900;
      background-color: ${colors.yellow};
      border-radius: 0.5rem;
      padding: 0.2rem 0.5rem;
    }
  }

  @media screen and (${device.laptop}) {
    max-width: 90rem;

    h2 {
      font-size: 5.7rem;
    }

    h4 {
      font-size: 2rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 5.2rem;
  width: fit-content;
  padding: 1rem 2rem;

  background-color: ${colors.red};
  color: ${colors.white};
  font-size: 2.2rem;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: inset 10em 0 0 0 #cd0000bb;
  }

  @media screen and (${device.laptop}) {
    font-size: 1.8rem;
  }
`;
