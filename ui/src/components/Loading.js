import styled from "styled-components";
import { ReactComponent as Loader } from "../images/Loader.svg";

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(55, 55, 55, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 25;
`;

const LoaderControl = styled.div`
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default function Loading() {
  return (
    <LoaderWrapper>
      <LoaderControl>
        <Loader />
      </LoaderControl>
    </LoaderWrapper>
  );
}
