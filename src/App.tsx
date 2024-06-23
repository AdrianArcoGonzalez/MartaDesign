import styled from "styled-components";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/portfolio" element={<h1>Portfolio</h1>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  min-width: 100%;
  background-color: #eae5df;
`;

export default App;
