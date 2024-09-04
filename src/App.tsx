import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import TanstackQueryProvider from '$contexts/TanstackQueryProvider';
import { router } from '$desktop/routes';

import './App.css';

const App = () => {
  return (
    <TanstackQueryProvider>
      <Suspense fallback={<></>}>
        <RouterProvider router={router} />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </TanstackQueryProvider>
  );
};

export default App;
