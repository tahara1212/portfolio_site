import { VFC } from "react";
import styled from "styled-components";
import { Divider } from "../pc/atoms/Divider";

import { Footer } from "../pc/organisms/Footer";
// import { Header } from "../pc/organisms/Header";
// import { About } from "../pc/pages/About";
import { Contact } from "../pc/pages/Contact";
// import { History } from "../pc/pages/History";
// import { Main } from "../pc/pages/Main";
// import { Skils } from "../pc/pages/Skils";
// import { Works } from "../pc/pages/Works";

import { SPTitle } from "../sp/molecules/SPTitle";
import { SPHeader } from "../sp/organisms/SPHeader";
import { SPAbout } from "../sp/pages/SPAbout";
import { SPHistory } from "../sp/pages/SPHistory";
import { SPMain } from "../sp/pages/SPMain";
import { SPSkils } from "../sp/pages/SPSkils";
import { SPWorks } from "../sp/pages/SPWorks";

type Props = {
  title: string;
};

export const SPContents: VFC<Props> = (props) => {
  const { title } = props;

  return (
    <>
      <SPHeader />
      <SMainContent>
        <SPTitle title={title} />
        <SPMain />
        <Divider />
        <SPAbout />
        <Divider />
        <SPHistory />
        <Divider />
        <SPWorks />
        <Divider />
        <SPSkils />
        <Divider />
        <Contact />
      </SMainContent>
      <Footer />
    </>
  );
};

const SMainContent = styled.div`
  width: 100%;
  padding-top: 20px;
  margin: 0 auto;
  /* background-color: skyblue; */
`;
