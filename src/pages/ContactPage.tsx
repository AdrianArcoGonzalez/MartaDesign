import styled from "styled-components";
import Header from "../components/Header/Header";

const ContactPage = () => {
  return (
    <ContactPageStyled>
      <Header />
      <section className="dataSection">
        <article>
          <p className="text">
            Quieres saber más sobre mis trabajos? Envíame un correo electrónico
          </p>
        </article>
        <article>
          <span className="text">calvofernandezmarta@gmail.com</span>
        </article>
      </section>
    </ContactPageStyled>
  );
};

const ContactPageStyled = styled.div`
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
  width: 100%;
  margin-bottom: 40px;

  .dataSection {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .text {
    margin: 0;
    padding: 10px;
    text-align: center;
    color: "#00000";
    font-weight: 500;
  }
`;
export default ContactPage;
