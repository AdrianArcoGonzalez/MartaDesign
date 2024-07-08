import styled from "styled-components";

interface ArticleType {
  title: string;
  image: { url: string; label: string };
  text?: string;
}

interface Props {
  article: ArticleType;
}
const Article = ({ article }: Props) => {
  return (
    <ArticleStyled>
      <div className="leftSide">
        <div className="header">
          <span>{article.title}</span>
        </div>
        <p className="text-white">{article.text}</p>
      </div>

      <div className="rightSide">
        <div className="header-white">
          <span>CHAOS</span>
        </div>
        <p className="text">
          Una colección con un poco de locura mezclando volúmenes y estampados.
          Sobreponiendo capas para crear una estética de lo más curiosa.
          Intentando buscando a cada momento un toque de locura. Diseñada para
          espíritus l ibres, CHAOS es mucho más que una simple l ínea de ropa;
          es una expresión artística que desafía las convenciones y celebra la
          belleza en el caos. Esta colección fusiona volúmenes, estampados y
          texturas de una manera alternativa, cada prenda cuenta su propia
          historia visual, creando una estética de lo más curiosa. La paleta de
          colores junto con estampados contratantes, define la identidad visual
          de CHAOS. … Un mundo donde el caos se convierte en arte… No es solo
          una colección de moda; es una declaración de autenticidad. Descubre la
          magia de CHAOS y sumérgete en un viaje donde la moda se convierte en
          una expresión de l ibertad y belleza en su forma más caótica y
          encantadora. Marta Calvo
        </p>
      </div>
    </ArticleStyled>
  );
};

const ArticleStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: fit-content;

  @media (min-width: 750px) {
    flex-direction: row;
    height: auto;
  }

  .leftSide {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    background-color: #000000;
    border: 1px solid black;
  }

  .rightSide {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    border: 1px solid black;
  }

  .header {
    color: white;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;

    &-white {
      color: black;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
  }

  .image {
    object-fit: cover;
    object-position: center;
    height: 250px;
    width: 100%;
    max-width: 100%;
  }

  .text {
    font-size: 0.8 rem;
    min-height: 250px;
    text-align: center;
    text-align: left;
    padding: 20px;
    color: black;

    &-white {
      font-size: 0.8 rem;
      min-height: 250px;
      text-align: center;
      text-align: left;
      padding: 20px;
      color: white;

      @media (min-width: 750px) {
        min-height: 480px;
      }
    }

    @media (min-width: 750px) {
      min-height: 480px;
    }
  }
`;

export default Article;
