import styled from "styled-components";
import VideoPlayer from "../components/Video/VideoPlayer";
import Header from "../components/Header/Header";
import ImagesBar from "../components/ImagesBar/ImagesBar";
import Article from "../components/Article/Article";
import nota from "../assets/ChaosNotaPrensa.jpg";
const HomePage = () => {
  const article = {
    image: {
      url: nota,
      label: "fashion",
    },
    title: "",
    text: "",
  };

  return (
    <HomePageStyled>
      <VideoPlayer />
      <Header />
      <ImagesBar />
      <Article article={article} />
    </HomePageStyled>
  );
};

const HomePageStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;
  max-width: 100%;
`;
export default HomePage;
