/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImagesBar = () => {
  const [images, setImages] = useState<any[]>([]);

  const importImages = async () => {
    const imageModules = import.meta.glob(`../../assets/chaosSession/*`);
    const importedImages = await Promise.all(
      Object.entries(imageModules).map(async ([, importer]) => {
        const module = await importer();
        return (module as any).default;
      })
    );
    setImages(importedImages as any);
  };
  useEffect(() => {
    importImages();
  }, []);
  return (
    <ImagesBarStyled>
      <Carousel
        showStatus={false}
        showArrows={false}
        infiniteLoop
        interval={4000}
        autoPlay
        centerMode
        className="imagesCarrousel"
        showIndicators={false}
        stopOnHover
        showThumbs={false}
      >
        {images.map((image: string) => (
          <div className="listItem" key={image}>
            <img
              about={image}
              className="image"
              src={image}
              height={50}
              width={50}
            />
          </div>
        ))}
      </Carousel>
    </ImagesBarStyled>
  );
};

const ImagesBarStyled = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  /* .imagesCarrousel {
    max-width: 100%;
    height: auto;
  } */
  .listItem {
    margin: 0px;
    width: 100%;
    padding: 0;
    height: auto;
  }

  .image {
    height: 340px;
    object-fit: contain;
    object-position: center;
    aspect-ratio: 1 / 1;
    width: 100%;
    max-width: 100%;
  }
`;

export default ImagesBar;
