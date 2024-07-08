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
        className="imagesCarrouselMobile"
        showIndicators={false}
        stopOnHover={true}
        showThumbs={false}
      >
        {images.map((image: string) => (
          <div key={image}>
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
      <Carousel
        showStatus={false}
        showArrows
        infiniteLoop
        interval={4000}
        autoPlay
        className="imagesCarrousel"
        showIndicators
        stopOnHover={true}
        thumbWidth={100}
      >
        {images.map((image: string) => (
          <div key={image}>
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 350px;

  @media (min-width: 750px) {
    width: 100%;
  }

  .imagesCarrouselMobile {
    display: block;
    max-width: 100%;

    @media (min-width: 750px) {
      display: none;
    }
  }

  .imagesCarrousel {
    display: block;
    max-width: 100%;
    @media (max-width: 750px) {
      display: none;
    }
  }
  .image {
    height: auto;
    max-height: 320px;
    object-fit: contain;
    object-position: center;
    aspect-ratio: 1 / 1;
    width: 100%;
    max-width: 100%;
  }
`;

export default ImagesBar;
