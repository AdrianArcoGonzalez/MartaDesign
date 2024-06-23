import styled from "styled-components";
import Header from "../components/Header/Header";

const AboutPage = () => {
  return (
    <AboutPageStyled>
      <Header />
    </AboutPageStyled>
  );
};

const AboutPageStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export default AboutPage;
