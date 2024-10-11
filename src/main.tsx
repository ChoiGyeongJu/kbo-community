import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  await (async () => {
    const { worker } = await import('./mocks/browser');
    worker.start();
  })();
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
