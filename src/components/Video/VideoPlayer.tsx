import styled from "styled-components";
import video from "../../assets/fashionFilm.mp4";
const VideoPlayer = () => {
  return (
    <VideoStyled
      about="fasionFilm video"
      src={video}
      height={100}
      width={100}
      autoPlay={true}
      loop={true}
      controls
    />
  );
};

const VideoStyled = styled.video`
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
`;

export default VideoPlayer;
