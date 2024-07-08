import styled from "styled-components";
import Header from "../components/Header/Header";

const ContactPage = () => {
  return (
    <ContactPageStyled>
      <Header />
    </ContactPageStyled>
  );
};

const ContactPageStyled = styled.div`
  display: flex;
  padding-top: 40px;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 100%;
  width: 100%;
  margin-bottom: 40px;
  flex-direction: column;
`;
export default ContactPage;
