import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const headerConfig = [
  {
    label: "Home",
    url: "/home",
  },
  { label: "Portfolio", url: "/portfolio" },

  { label: "Fashion Film", url: "/fashionFilm" },
  { label: "Contact", url: "/contact" },
  { label: "Gallery", url: "/gallery" },
  { label: "About", url: "/about" },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <HeaderStyled>
      <ul className="headerList">
        {headerConfig.map((item) => (
          <li key={item.label} className="headerlistItem">
            <Link
              to={item.url}
              className={pathname === item.url ? "linkSelected" : "link"}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .headerList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 0;
    margin: 0;
  }

  .headerlistItem {
    margin: 0;
    padding: 0;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link {
    padding: 10px;
    color: #000000;
    margin: 0;
    text-align: center;
    margin-bottom: 1px;
  }

  .linkSelected {
    padding: 10px;
    margin: 0;
    text-align: center;
    font-weight: bold;
    text-decoration: underline;
    color: #000000;
  }
`;
