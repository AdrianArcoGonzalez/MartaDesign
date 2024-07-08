import styled from "styled-components";
import Header from "../components/Header/Header";
import video from "../assets/fashionFilm.mp4";
const FasionFilmPage = () => {
  return (
    <FasionFilmPageStyled>
      <Header />
      <video
        className="video"
        about="fasionFilm video"
        src={video}
        height={200}
        width={200}
        autoPlay={true}
        loop={true}
        controls
        playsInline
      />
    </FasionFilmPageStyled>
  );
};

const FasionFilmPageStyled = styled.div`
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
  width: 100%;
  margin-bottom: 30px;
  .video {
    height: 300px;
    aspect-ratio: 1/1;
    object-fit: contain;
    object-position: center;
  }
`;
export default FasionFilmPage;
