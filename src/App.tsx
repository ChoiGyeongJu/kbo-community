import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ModalProvider } from '$contexts/ModalContext';
import TanstackQueryProvider from '$contexts/TanstackQueryProvider';

import { WebRouter } from '$desktop/routes';

import './App.css';

const App = () => {
  return (
    <TanstackQueryProvider>
      <ModalProvider>
        <WebRouter />
      </ModalProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </TanstackQueryProvider>
  );
};

export default App;
