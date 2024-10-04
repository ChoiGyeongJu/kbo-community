import { useParams } from 'react-router-dom';

import { useSuspenseQuery } from '@tanstack/react-query';

import styled from 'styled-components';

import { Comments } from '$desktop/components/Comments';
import { PostDetail } from '$desktop/components/PostDetail';

import { postQueries } from '$shared/service/post';

const DetailPage = () => {
  const { postId } = useParams();

  const { data } = useSuspenseQuery(postQueries.serviceGetPost({ postId: Number(postId) }));

  return (
    <DetailWrapper>
      <PostDetail postInfo={data.post} />
      <Comments commentCnt={data.post.commentCnt} comments={data.post.comments} />
    </DetailWrapper>
  );
};

export default DetailPage;

const DetailWrapper = styled.div`
  width: 1024px;
  height: 100%;
  padding: 50px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
`;
