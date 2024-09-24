import { useParams } from 'react-router-dom';

import { List } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { styled } from 'styled-components';

import { SizeFilter } from './SizeFilter';

import { Pagination } from '$desktop/components/Pagination';
import { PostListItem } from '$desktop/components/PostListItem';
import { UIButton } from '$desktop/components/UI/UIButton';
import { useListQueryParams, useRoute } from '$shared/hooks';
import { postQueries } from '$shared/service/post';

const ListPage = () => {
  const { category } = useParams();
  const useRoutes = useRoute();
  const { getQueryParams, setQueryParams } = useListQueryParams();
  const { page, size, keyword } = getQueryParams();

  const { data } = useSuspenseQuery(
    postQueries.serviceGetPostList({ category: String(category), page: page - 1, size, keyword })
  );

  const totalPage = Math.ceil(data.totalCount / size);
  const postList = data.postList;

  const handleChagePage = (_: React.ChangeEvent<unknown>, page: number) => {
    setQueryParams({ page });
  };

  const handleClickWrite = () => {
    useRoutes.goToWrite({ boardType: String(category) });
  };

  const handleClickPost = (id: number) => {
    useRoutes.goToRead({ boardType: String(category), postId: id });
  };

  return (
    <ListWrapper>
      <ButtonWrapper>
        <UIButton variant="outlined" onClick={handleClickWrite}>
          게시글 작성
        </UIButton>
      </ButtonWrapper>

      <StyledTable>
        {postList?.map(v => (
          <PostListItem key={v.postId} postInfo={v} onClickPost={() => handleClickPost(v.postId)} />
        ))}
      </StyledTable>
      <StyledPagination>
        <Pagination count={totalPage} page={page} onChange={handleChagePage} />
        <SizeFilter totalCount={data.totalCount} />
      </StyledPagination>
    </ListWrapper>
  );
};
export default ListPage;

const ListWrapper = styled.div`
  width: 900px;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 80px;
`;

const ButtonWrapper = styled.div`
  margin: 0px 0 32px auto;
`;

const StyledTable = styled(List)`
  overflow-y: auto;
  margin-top: 24px;
`;

const StyledPagination = styled.div`
  padding: 24px;
  position: relative;
`;
