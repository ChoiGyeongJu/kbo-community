import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from 'App';

import Layout from './Layout';

/**
 * @description 라우팅 구조
 *
 * list  : /board/:boardType/list (세부 조회 조건은 쿼리스트링 사용)
 * view  : /board/:boardType/view/:postId
 * write : /board/:boardType/write/:postId? (postId 옵셔널-게시글 수정)
 *
 */

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Navigate to={'/board/all/list'} replace />} />
          <Route path="/" element={<Navigate to={'/board/all/list'} replace />} />

          <Route path="board/:boardType">
            <Route path="list" element={<App />} />
            <Route path="view/:postId" element={<App />} />
            <Route path="write/:postId?" element={<>Write Page</>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
