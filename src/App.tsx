import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import styled from "styled-components";
import { Divider } from "./components/atoms/Divider";
import { Loader } from "./components/atoms/Loader";
import { MainMask } from "./components/atoms/MainMask";

import { Title } from "./components/molecules/Title";
import { Footer } from "./components/organisms/Footer";
import { Header } from "./components/organisms/Header";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { History } from "./components/pages/History";
import { Main } from "./components/pages/Main";
import { Skils } from "./components/pages/Skils";
import { Works } from "./components/pages/Works";

import bg from "./images/bg.jpeg";

export type TitleContextType = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
};

export const TitleTextContext = createContext({} as TitleContextType);

function App() {
  const [title, setTitle] = useState<string>("Welcome");
  const [loading, setLoading] = useState<Boolean>(true);
  const value: TitleContextType = {
    title,
    setTitle,
  };

  const img = new Image();
  img.src = bg; // プリロードする

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2700);
  }, [setLoading]);

  return (
    <TitleTextContext.Provider value={value}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MainMask />
          <Header />
          <SMainContent>
            <Title title={title} />
            <Main />
            <Divider />
            <About />
            <Divider />
            <History />
            <Divider />
            <Works />
            <Divider />
            <Skils />
            <Divider />
            <Contact />
          </SMainContent>
          <Footer />
        </>
      )}
    </TitleTextContext.Provider>
  );
}

const SMainContent = styled.div`
  width: 100%;
  padding-top: 80px;
  margin: 0 auto;
`;

export default App;
