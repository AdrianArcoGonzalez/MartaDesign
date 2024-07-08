import styled from "styled-components";
import Header from "../components/Header/Header";

const AboutPage = () => {
  return (
    <AboutPageStyled>
      <Header />
      <h2>Sobre Mí</h2>
      <p>
        Creo firmemente que la moda es una forma de arte y una poderosa
        herramienta de autoexpresión. Mi objetivo es crear diseños que sean
        innovadores y accesibles, que permitan a las personas sentirse seguras y
        auténticas. Me inspiro en la naturaleza, el arte contemporáneo, y las
        culturas de todo el mundo, buscando siempre integrar sostenibilidad y
        responsabilidad social en mi trabajo.
      </p>
      <h2>Formación y Experiencia</h2>
      <p>
        Me gradué con honores de ICModa en Barcelona, donde tuve la oportunidad
        de aprender de algunos de los mejores profesionales de la industria.
      </p>
      <h2>Mi Filosofía de Diseño</h2>
      <p>
        Creo firmemente que la moda es una forma de arte y una poderosa
        herramienta de autoexpresión. Mi objetivo es crear diseños que sean
        innovadores y accesibles, que permitan a las personas sentirse seguras y
        auténticas. Me inspiro en la naturaleza, el arte contemporáneo, y las
        culturas de todo el mundo, buscando siempre integrar sostenibilidad y
        responsabilidad social en mi trabajo.
      </p>
      <h2>Más Allá del Diseño</h2>
      <p>
        Cuando no estoy esbozando nuevas ideas o trabajando en mi próximo
        proyecto, me gusta mantenerme al tanto de las últimas tendencias en la
        industria de la moda, asistir a eventos y exposiciones, y conectarme con
        otros creativos. También disfruto de viajar, lo que me permite descubrir
        nuevas inspiraciones y ampliar mi perspectiva sobre el diseño y la moda
        global.
      </p>

      <h2>Mi Misión</h2>
      <p>
        Mi misión es dejar una huella en el mundo de la moda a través de diseños
        que celebren la individualidad y la innovación. Estoy emocionada por lo
        que el futuro depara y ansiosa por contribuir con mi visión única al
        vibrante universo de la moda.
      </p>
    </AboutPageStyled>
  );
};

const AboutPageStyled = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export default AboutPage;
