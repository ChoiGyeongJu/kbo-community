import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary fallback={<>error</>}>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      {
        path: '',
        index: true,
        element: <div>홈입니다.</div>,
      },
    ],
  },
  {
    path: '*',
    element: null,
  },
]);

export default router;
