import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Filter from "./components/filters";
import JobContent from "./components/job-content";
import Footer from "./components/Footer";

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ececec;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 1280px) {
    margin: 12px;
  }
`;

function App() {
  const [searchText, setSearchText] = useState(null);

  return (
    <Main>
      <Navbar></Navbar>
      <Search setSearchText={setSearchText}></Search>
      <MainContent>
        <Filter></Filter>
        <JobContent searchText={searchText}></JobContent>
      </MainContent>
      <Footer />
    </Main>
  );
}

export default App;
