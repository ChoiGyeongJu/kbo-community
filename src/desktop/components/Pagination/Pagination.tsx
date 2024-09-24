import { Pagination as MuiPagination, PaginationProps } from '@mui/material';
import { styled } from 'styled-components';

type Props = PaginationProps;

const Pagination = ({ ...props }: Props) => {
  return (
    <StyledPagination
      defaultPage={1}
      boundaryCount={0}
      siblingCount={4}
      size="medium"
      sx={{ margin: 2 }}
      {...props}
    />
  );
};

export default Pagination;

const StyledPagination = styled(MuiPagination)<Props>`
  margin: 0;
  & .MuiPagination-ul {
    display: flex;
    justify-content: center;
  }
`;
