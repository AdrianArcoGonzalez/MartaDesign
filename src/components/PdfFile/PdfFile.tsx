/* eslint-disable @typescript-eslint/no-explicit-any */
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useEffect, useState } from "react";
import styled from "styled-components";

const PdfViewer = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [images, setImages] = useState([]);

  const importImages = async () => {
    const imageModules = import.meta.glob("../../assets/test/*");

    const importedImages = await Promise.all(
      Object.entries(imageModules).map(async ([, importer]) => {
        const module = await importer();
        return (module as any).default;
      })
    );
    setImages(importedImages as any);
    setNumPages(importedImages.length);
  };
  useEffect(() => {
    importImages();
  }, []);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  //   console.log(numPages);
  //   setNumPages(numPages);
  // }

  // const importAll = (r: any) => {
  //   const images: any = {};
  //   r.keys().forEach((item) => {
  //     images[item.replace("./", "")] = r(item);
  //   });
  //   return images;
  // };

  // // Almacena las imágenes importadas en una variable
  // const images = importAll(
  //   require.context("../../assets/test", false, /\.(png|jpe?g|svg)$/)
  // );

  return (
    <PdfSectionStyled>
      <img
        src={images[pageNumber - 1]}
        alt="Document"
        height={100}
        width={100}
        className="image"
      />
      <div>
        {pageNumber > 1 && (
          <button onClick={() => setPageNumber(pageNumber - 1)}>
            previous
          </button>
        )}
        {pageNumber !== numPages && (
          <button onClick={() => setPageNumber(pageNumber + 1)}>next</button>
        )}
      </div>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </PdfSectionStyled>
  );
};

const PdfSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .pdf {
    display: flex;
    position: unset;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
  }
  .image {
    max-width: 100%;
  }
  .page {
    height: 300px;
    max-width: 300px;
  }
`;
export default PdfViewer;
