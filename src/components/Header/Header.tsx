import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const headerConfig = [
  {
    label: "Home",
    url: "/home",
  },
  { label: "Portfolio", url: "/portfolio" },
  { label: "Contact", url: "/contact" },
  { label: "About", url: "/about" },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <HeaderStyled>
      <ul className="list">
        {headerConfig.map((item) => (
          <li key={item.label} className="listItem">
            <Link
              to={item.url}
              className={
                pathname === item.url.toLowerCase() ? "linkSelected" : "link"
              }
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
  height: 60px;

  .list {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  .listItem {
    margin: 0px;
    padding: 0;
  }

  .link {
    padding: 10px;
    color: #000000;
    text-decoration: underline;
  }
  .linkSelected {
    padding: 10px;
    color: #000000;
    font-weight: bold;
    text-decoration: underline;
  }
`;
