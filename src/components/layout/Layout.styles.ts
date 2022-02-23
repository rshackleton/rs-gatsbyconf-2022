import { css } from '@emotion/react';
import styled from '@emotion/styled';

const globalStyles = css`
  html {
    --bgColor: rgb(17, 8, 31);
    --fgColor: rgb(255, 255, 255);
    --accentColor: #a456f0;

    background: var(--bgColor);
    color: var(--fgColor);
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1240px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1rem;
`;

const Tagline = styled.span`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5em;

  em {
    background: linear-gradient(90deg, #a456f0, #a456f0);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--accentColor);
    font-style: normal;
  }
`;

const Nav = styled.div``;

const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  color: var(--fgColor);
  font-size: 1.25rem;

  &:focus-visible,
  &:hover {
    color: var(--accentColor);
  }
`;

const Main = styled.main`
  padding: 1rem 1rem;
`;

const Footer = styled.footer`
  font-size: 0.5rem;
  font-weight: 400;
  line-height: 1.5em;
  padding: 1rem 1rem;

  em {
    background: linear-gradient(90deg, #a456f0, #a456f0);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--accentColor);
    font-style: normal;
  }
`;

const Styles = {
  globalStyles,
  Container,
  Footer,
  Header,
  Main,
  Nav,
  NavItem,
  NavLink,
  NavList,
  Tagline,
};

export default Styles;
