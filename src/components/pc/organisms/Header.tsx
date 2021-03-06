import { memo, VFC } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import variable from "../../../css/variables.json";
import { HeaderListItem } from "../atoms/HeaderListItem";
import { Time } from "../atoms/Time";
import { HeaderListData } from "../../../data/HeaderListData";

export const Header: VFC = memo(() => {
  return (
    <SHeader>
      <SLogo>
        <Link to="Main" spy={true} smooth={true} offset={-120} duration={500}>
          <h1>sT</h1>
        </Link>
      </SLogo>
      <SNav>
        <SUl>
          {HeaderListData.map((headerList) => (
            <HeaderListItem idName={headerList} />
          ))}
        </SUl>
      </SNav>
      <Time />
    </SHeader>
  );
});

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  line-height: 80px;
  padding: 0 40px;
  font-size: 1.6rem;
  pointer-events: auto;
  position: fixed;
  background-color: ${variable.bgColor};
  z-index: 4;
`;

const SLogo = styled.div`
  position: relative;
  left: 0;
  margin-bottom: 0;
  justify-content: flex-start;
  padding: 0;
  width: 57px;
  height: 100%;
  cursor: pointer;
  opacity: 0.8;
`;

const SNav = styled.nav`
  width: 50%;
  line-height: 5;
  margin: 0 auto;
  font-size: 1rem;
`;

const SUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
`;
