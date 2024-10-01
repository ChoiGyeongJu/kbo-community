import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

import { Header } from '$desktop/components';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Suspense>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Suspense>
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
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
`;
