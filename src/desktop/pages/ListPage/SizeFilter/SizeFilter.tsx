import { useState } from 'react';

import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { InputLabel, Menu, MenuItem } from '@mui/material';
import { styled } from 'styled-components';

import useListQueryParams, { SizeOptions } from '$shared/hooks/useListQueryParams';

const options = [
  { label: '10개씩 보기', value: 10 },
  { label: '30개씩 보기', value: 30 },
  { label: '50개씩 보기', value: 50 },
  { label: '100개씩 보기', value: 100 },
];

const SizeFilter = ({ totalCount }: { totalCount: number }) => {
  const { getQueryParams, setQueryParams } = useListQueryParams();
  const { size, page } = getQueryParams();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenFilter = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleChageSize = (value: SizeOptions) => {
    if (totalCount < value * page) {
      setQueryParams({ size: value, page: Math.ceil(totalCount / value) });
    } else {
      setQueryParams({ size: value });
    }
    setAnchorEl(null);
  };

  return (
    <SelectWrapper>
      <InputLabel onClick={handleOpenFilter}>
        {size}개씩 보기
        {anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
      </InputLabel>
      {!!anchorEl && (
        <Menu
          autoFocus={false}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          {options.map(v => (
            <MenuItem
              key={v.value}
              value={v.value}
              onClick={() => handleChageSize(v.value as SizeOptions)}
            >
              {v.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </SelectWrapper>
  );
};

export default SizeFilter;

const SelectWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  & label {
    display: flex;
    gap: 4px;
    cursor: pointer;
    border: 1px solid;
    padding: 6px 12px;
    border-radius: 8px;
  }
`;
