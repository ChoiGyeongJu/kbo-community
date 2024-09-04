import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutWrapper>
      {/* <Header /> */}
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
