import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px calc(100% - 320px);
  grid-auto-flow: row;
  grid-gap: 40px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif;
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  overflow-y: auto;
  height: calc(100vh - 32px);
  padding-top: 32px;
`;

const Main = styled.div`
  max-width: 75%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Content = styled.div`
  width: 100%;
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

export {
  Container,
  Nav,
  Main,
  Content,
  Index
};

