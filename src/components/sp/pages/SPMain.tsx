import { memo, VFC } from "react";
import { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import bg from "../../../images/bg.jpeg";
import variable from "../../../css/variables.json";
import { useInView } from "react-intersection-observer";
import { TitleTextContext } from "../../../App";

export const SPMain: VFC = memo(() => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });

  useEffect(() => {
    if (inView) {
      setTitle("Welcome");
    }
  }, [inView, setTitle]);

  return (
    <SContainer id="Main">
      <SMain ref={ref}>
        <SMainBg></SMainBg>
      </SMain>
    </SContainer>
  );
});

const SContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
  overflow: hidden;
`;

const KFMain = keyframes`
0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
  }
`;

const SMain = styled.div`
  width: calc(100% - 50px);
  height: calc(95vh - 40px);
  overflow: hidden;
  animation-name: ${KFMain};
  animation-duration: 0.8s;
`;

const KFMainBg = keyframes`
  0% {transform: scale(1);}
  100% {transform: scale(1.5);}
`;

const SMainBg = styled.div`
  width: calc(100%);
  height: calc(95vh - 40px);
  margin: 0 auto;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  animation: ${KFMainBg};
  animation-duration: 10s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  position: relative;
  &::before {
    content: "";
    background-color: ${variable.maskColor};
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0.1;
  }
`;
