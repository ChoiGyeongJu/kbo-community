import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import { Header } from '$desktop/components';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      {/* Footer */}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ededed;
`;

const ContentWrapper = styled.div`
  margin-top: 80px;
`;
