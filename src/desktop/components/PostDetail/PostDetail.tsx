import styled from 'styled-components';

import { PostDetail as T } from '$shared/types';
import * as Post from './fragments';

interface Props {
  postInfo: T;
}

const PostDetail = ({ postInfo }: Props) => {
  return (
    <DetailWrapper>
      <Post.PostTitle title={postInfo.title} />
      <Post.PostAuthor
        name={postInfo.author.name}
        date={postInfo.regiDate}
        viewCnt={postInfo.viewCnt}
      />
      <Post.PostContents contents={postInfo.contents} />
    </DetailWrapper>
  );
};

export default PostDetail;

const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
