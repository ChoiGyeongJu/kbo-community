import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';

import { styled } from 'styled-components';

import { KBO_TEAM_LIST } from '$constants/teams';
import { useRoute } from '$shared/hooks';
import { BoardType } from '$shared/types';

const TeamFilter = () => {
  const useRoutes = useRoute();
  const { boardType } = useParams<{ boardType: BoardType }>();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenFilter = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleChangeFilter = (value: BoardType) => {
    if (value === boardType) return;

    useRoutes.goToList(value);
    setAnchorEl(null);
  };

  return (
    <>
      <ValueWrapper onClick={handleOpenFilter}>
        {KBO_TEAM_LIST[boardType ?? 'total']}
        {anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
      </ValueWrapper>
      {!!anchorEl && (
        <Menu
          autoFocus={false}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          {Object.entries(KBO_TEAM_LIST).map(([key, name]) => (
            <StyledMenuItem key={key} onClick={() => handleChangeFilter(key as BoardType)}>
              {name}
            </StyledMenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default TeamFilter;

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
