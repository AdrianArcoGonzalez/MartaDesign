/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";

const PortfolioPage = () => {
  const [images, setImages] = useState<any[]>([]);

  const importImages = async () => {
    const imageModules = import.meta.glob(`../assets/portafolio/*`);
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
    <PortfolioPageStyled>
      <Header />
      <ul className="list">
        {images.map((image: string) => (
          <li className="listItem" key={image}>
            <img
              height={200}
              width={200}
              className="image"
              src={image}
              about={"image from a session"}
              alt={"image from a session"}
            />
          </li>
        ))}
      </ul>
    </PortfolioPageStyled>
  );
};

const PortfolioPageStyled = styled.div`
  display: flex;
  padding-top: 40px;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 100%;
  width: 100%;
  margin-bottom: 40px;
  flex-direction: column;

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 750px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .listItem {
    margin: 0;
    padding: 0;
    width: "100%";
  }

  .image {
    max-width: 100%;
    height: auto;
    width: auto;
    object-position: center;
    object-fit: cover;
    @media (min-width: 750px) {
      height: 600px;
      width: auto;
    }
  }
`;
export default PortfolioPage;
