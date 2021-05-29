import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr;
  grid-template-columns: 286px 1fr;
  grid-auto-flow: row;
  max-width: 1800px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Header = styled.h1`
  position: sticky;
  top: 0;
  width: 256px;
  height: 70px;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background-color: rgb(242, 242, 250);
  color: #663399;
  font-size: 20px;
  font-weight: 900;
  text-decoration: none;
  margin: 0;
  padding-left: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 768px) {
    position: fixed;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    z-index: 1;
    width: 100%;
  }
`;

const Nav = styled.aside`
  position: sticky;
  top: 70px;
  width: 256px;
  height: calc(100vh - 70px);
  overflow-y: auto;
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  background-color: rgb(242, 242, 250);
  padding-left: 32px;
  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 1;
    width: 100%;
    transition: all 0.3s ease-out 0s;
    transform: translateX(${({isVisible} : {isVisible : boolean}) => isVisible ? '0%' : '-100%'});
  }
`;

const Main = styled.div`
  display: flex;
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  justify-content: space-between;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 75%;
  max-width: 1024px;
  margin: 32px auto;
  order: 1;
  @media screen and (max-width: 1024px) {
    width: inherit;
    margin: 0 32px 32px;
  }
`;

const Index = styled.aside`
  margin-right: auto;
  position: sticky;
  top: 0;
  width: inherit;
  height: calc(100vh - 32px);
  order: 2;
  @media screen and (max-width: 1024px) {
    position: relative;
    order: 0;
    height: 100%;
    margin: 32px;
    border-bottom: 1px solid;
    border-color: #b0b0bb;
  }
`;

const NavList = styled.ul`
  padding-inline-start: 0;
`;

const NavSection = styled.li`
  color: #663399;
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
  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;

export {
  Container,
  Header,
  Nav,
  Main,
  Content,
  Index,
  NavList,
  NavSection,
  NavItem,
  PageIndex
};

