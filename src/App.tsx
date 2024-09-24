import { Suspense } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import TanstackQueryProvider from '$contexts/TanstackQueryProvider';
import { WebRouter } from '$desktop/routes';

import './App.css';

const App = () => {
  return (
    <TanstackQueryProvider>
      <Suspense fallback={<></>}>
        <WebRouter />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </TanstackQueryProvider>
  );
};

export default App;
