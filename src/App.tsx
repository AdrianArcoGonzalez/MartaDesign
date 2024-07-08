import styled from "styled-components";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <AppStyled>
      <div className="layout">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/portfolio" element={<h1>Portfolio</h1>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  height: 400,
                  width: "100vw",
                }}
              >
                <h1>Esta página no existe</h1>
                <Link
                  to="/home"
                  about="Go home link"
                  style={{
                    color: "black",
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "5px",
                    marginTop: "40px",
                  }}
                >
                  Ir a la Home
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: #eae5df;

  .layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 1460px;
    width: 100%;
    min-height: 100vh;
  }
`;

export default App;
