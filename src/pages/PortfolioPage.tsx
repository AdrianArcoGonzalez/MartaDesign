import styled from "styled-components";
import Header from "../components/Header/Header";

const PortfolioPage = () => {
  return (
    <PortfolioPageStyled>
      <Header />
    </PortfolioPageStyled>
  );
};

const PortfolioPageStyled = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export default PortfolioPage;
