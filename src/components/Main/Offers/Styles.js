import styled from "styled-components";
import { colors } from "../../../styles/Global";
import { device } from "../../../utils/constants/sizes";

export const Container = styled.section`
  margin: 0 auto;
  margin-bottom: 6.4rem;

  h2 {
    font-family: "Lilita One";
    font-size: 3.2rem;
    font-weight: 400;
    color: ${colors.brown};
    text-transform: uppercase;
  }

  p {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
    color: ${colors.brown_secondary};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media screen and (${device.laptop}) {
    p {
      width: 70.5rem;
    }
  }

  @media screen and (${device.ipad}) {
    p {
      width: 40rem;
    }
  }

  @media screen and (${device.ipad}) {
    margin-bottom: 3.79rem;

    p {
      width: 37rem;
    }
  }
`;
