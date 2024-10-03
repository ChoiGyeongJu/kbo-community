import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ListPage, DetailPage, WritePage } from '$desktop/pages';

import Layout from './Layout';

/**
 * @description 라우팅 구조
 *
 * list  : /:boardType/list (세부 조회 조건은 쿼리스트링 사용)
 * view  : /:boardType/view/:postId
 * write : /:boardType/write/:postId? (postId 옵셔널-게시글 수정)
 *
 */

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Navigate to={'/total/list'} replace />} />
          <Route path="/" element={<Navigate to={'/total/list'} replace />} />

          <Route path="/:boardType">
            <Route path="list" element={<ListPage />} />
            <Route path="view/:postId" element={<DetailPage />} />
            <Route path="write/:postId?" element={<WritePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
