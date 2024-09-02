import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Test } from './Test';

const DesktopRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<div>/</div>} />
        <Route path="/post/:postId" element={<Test />} />
        <Route path="*" element={<div>*</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default DesktopRouter;
