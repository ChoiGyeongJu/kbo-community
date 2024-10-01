import { useParams } from 'react-router-dom';

import { useSuspenseQuery } from '@tanstack/react-query';

import styled from 'styled-components';

import { PostDetail } from '$desktop/components/PostDetail';

import { postQueries } from '$shared/service/post';

const DetailPage = () => {
  const { postId } = useParams();

  const { data } = useSuspenseQuery(postQueries.serviceGetPost({ postId: Number(postId) }));

  return (
    <DetailWrapper>
      <PostDetail postInfo={data.post} />
    </DetailWrapper>
  );
};

export default DetailPage;

const DetailWrapper = styled.div`
  width: 900px;
  height: 100%;
  padding: 50px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
`;
