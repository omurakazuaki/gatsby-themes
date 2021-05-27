import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px calc(100% - 320px);
  grid-auto-flow: row;
  grid-gap: 40px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Nav = styled.aside`
  position: sticky;
  top: 0;
  overflow-y: auto;
  height: calc(100vh - 32px);
  padding-top: 32px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Content = styled.div`
  width: calc(75% - 64px);
  padding-right: 64px;
  padding-top: 32px;
`;

const Index = styled.aside`
  margin-right: auto;
  position: sticky;
  top: 0;
  height: calc(100vh - 32px);
  padding-top: 32px;
`;

const SiteName = styled.h1`
  color: #6d2f9c;
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`;

const NavList = styled.ul`
  color: #b0b0bb;
  padding-inline-start: 4px;
`;

const NavSection = styled.li`
  color: #3D3D4D;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NavItem = styled.li`
`;

const PageIndex = styled.h2`
  color: #3D3D4D;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  margin-top: 64px;
`;

export {
  Container,
  Nav,
  Main,
  Content,
  Index,
  SiteName,
  Logo,
  NavList,
  NavSection,
  NavItem,
  PageIndex
};

