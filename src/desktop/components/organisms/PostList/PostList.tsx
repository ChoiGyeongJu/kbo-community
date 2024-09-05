import { List } from '@mui/material';
import styled from 'styled-components';

import { PostListHeader } from './PostListHeader';

import PostListItem, {
  PostListItemField,
} from '$desktop/components/molecules/PostListItem/PostListItem';

interface Props {
  postList: PostListItemField[];
  onClickPost: (postId: number) => void;
}

const PostList = ({ postList, onClickPost }: Props) => {
  return (
    <StyledList>
      <PostListHeader />
      {postList?.map(post => {
        return <PostListItem key={post.postId} postInfo={post} onClickPost={onClickPost} />;
      })}
    </StyledList>
  );
};

const StyledList = styled(List)`
  width: 100%;
`;

export default PostList;
