import { useParams } from 'react-router-dom';

import { List } from '@mui/material';

import { useQuery } from '@tanstack/react-query';

import { styled } from 'styled-components';

import {
  PostListItem,
  Pagination,
  PostListHeader,
  SearchPost,
  UIButton,
} from '$desktop/components';

import { KBO_TEAM_LIST } from '$constants/teams';
import { useListQueryParams, useRoute } from '$shared/hooks';
import { postQueries } from '$shared/service/post';
import { BoardType } from '$shared/types';
import { SearchFilter } from './SearchFilter';
import { SizeFilter } from './SizeFilter';
import { TeamFilter } from './TeamFilter';

const ListPage = () => {
  const { boardType } = useParams<{ boardType: BoardType }>(); // TODO: 잘못된 boardType에 대한 접근 처리
  const useRoutes = useRoute();
  const { getQueryParams, setQueryParams } = useListQueryParams();
  const { page, size, keyword } = getQueryParams();

  const { data } = useQuery(
    postQueries.serviceGetPostList({
      boardType: boardType ?? 'total',
      page: page - 1,
      size,
      keyword,
    })
  );

  const totalPage = data ? Math.ceil(data.totalCount / size) : 0;
  const postList = data ? data.postList : [];

  const handleChagePage = (_: React.ChangeEvent<unknown>, page: number) => {
    setQueryParams({ page });
  };

  const handleClickWrite = () => {
    useRoutes.goToWrite({ boardType: boardType ?? 'total' });
  };

  const handleClickPost = (id: number) => {
    useRoutes.goToRead({ boardType: boardType ?? 'total', postId: id });
  };

  return (
    <ListWrapper>
      <BoardTitle>{KBO_TEAM_LIST[boardType ?? 'total']} 게시판</BoardTitle>
      <ButtonWrapper>
        <TeamFilter />
        <SearchWrapper>
          <SearchFilter />
          <SearchPost />
        </SearchWrapper>
        <UIButton variant="outlined" onClick={handleClickWrite}>
          게시글 작성
        </UIButton>
      </ButtonWrapper>

      <StyledTable>
        <PostListHeader />
        {postList?.map(v => (
          <PostListItem key={v.postId} postInfo={v} onClickPost={() => handleClickPost(v.postId)} />
        ))}
      </StyledTable>
      <StyledPagination>
        <Pagination count={totalPage} page={page} onChange={handleChagePage} />
        <SizeFilter totalCount={data ? data.totalCount : 0} />
      </StyledPagination>
    </ListWrapper>
  );
};
export default ListPage;

const ListWrapper = styled.div`
  width: 1024px;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const BoardTitle = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  padding: 20px 0 50px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  justify-content: space-between;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledTable = styled(List)`
  width: 100%;
  overflow-y: auto;
  margin-top: 24px;
  padding: 0 !important;
`;

const StyledPagination = styled.div`
  padding: 24px;
  position: relative;
`;
