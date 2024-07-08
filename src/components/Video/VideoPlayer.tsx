import styled from "styled-components";
import video from "../../assets/fashionFilm.mp4";
const VideoPlayer = () => {
  return (
    <VideoStyled>
      <video
        className="video"
        about="fasionFilm video"
        src={video}
        height={100}
        width={100}
        autoPlay={true}
        loop={true}
        controls={false}
        muted
      />
    </VideoStyled>
  );
};

const VideoStyled = styled.div`
  background-color: #000000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .video {
    object-fit: cover;
    object-position: center;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    max-width: 100%;
    aspect-ratio: 1/1;
    min-width: 300px;
    min-height: 300px;

    @media (min-width: 450px) {
      height: 400px;
      width: auto;
      background-color: black;
    }
  }
`;

export default VideoPlayer;
