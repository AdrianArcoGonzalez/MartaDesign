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
        <p className="text">{article.text}</p>
      </div>

      <div className="rightSide">
        <img
          height={150}
          width={150}
          className="image"
          src={article.image.url}
        />
      </div>
    </ArticleStyled>
  );
};

const ArticleStyled = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;

  .leftSide {
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: space-between; */
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
  }

  .image {
    object-fit: cover;
    object-position: center;
    height: 250px;
    width: 100%;
    max-width: 100%;
  }

  .text {
    height: 200px;
    max-width: 100%;
    text-align: center;
  }
`;

export default Article;
