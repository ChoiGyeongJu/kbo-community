import { useState } from 'react';

import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { styled } from 'styled-components';

import useListQueryParams, { FilterOptions } from '$shared/hooks/useListQueryParams';

const SearchFilter = () => {
  const { getQueryParams, setQueryParams } = useListQueryParams();
  const { filter } = getQueryParams();

  const currentFilter = filter === 'TITLE' ? '제목' : filter === 'WRITER' ? '작성자' : '제목';
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenFilter = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleChangeFilter = (value: FilterOptions) => {
    if (filter === value) return;

    setQueryParams({ filter: value });
    setAnchorEl(null);
  };

  return (
    <>
      <ValueWrapper onClick={handleOpenFilter}>
        {currentFilter}
        {anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
      </ValueWrapper>
      {!!anchorEl && (
        <Menu
          autoFocus={false}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          <StyledMenuItem value="TITLE" onClick={() => handleChangeFilter('TITLE')}>
            제목
          </StyledMenuItem>
          <StyledMenuItem value="TITLE" onClick={() => handleChangeFilter('WRITER')}>
            작성자
          </StyledMenuItem>
        </Menu>
      )}
    </>
  );
};

export default SearchFilter;

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border: 1px solid;
  height: 40px;
  padding: 0px 12px;
  font-size: 13px;
  border: 1px solid #ccd0d7;
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 13px !important;
`;
