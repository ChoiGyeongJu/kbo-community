import { Suspense } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { TanstackQueryProvider } from './contexts';

import DesktopRouter from '$desktop/DesktopRouter';

import './App.css';

const App = () => {
  return (
    <TanstackQueryProvider>
      <Suspense fallback={<></>}>
        <DesktopRouter />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </TanstackQueryProvider>
  );
};

export default App;
