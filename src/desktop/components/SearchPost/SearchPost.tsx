import { useRef, useState } from 'react';

import { Close } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import styled from 'styled-components';

import { TextField } from '$desktop/components';
import { useListQueryParams } from '$shared/hooks';

interface Props {
  width?: string;
}

const SearchPost = ({ width }: Props) => {
  const { getQueryParams, setQueryParams } = useListQueryParams();
  const { filter } = getQueryParams();

  const ref = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleClear = () => {
    setValue('');
    ref?.current?.focus?.();
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (e.relatedTarget?.ariaLabel === 'clear') {
      handleClear();
      return;
    }
    setIsFocus(false);
  };

  const handleSearch = () => {
    setQueryParams({ filter: filter ?? 'TITLE', keyword: value });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchInputWrapper width={width}>
      <IconButton size="small" type="button" aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
      <TextField
        ref={ref}
        outline="none"
        placeholder="게시글 검색"
        width={isFocus ? 'calc(100% - 40px)' : '100%'}
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocus && (
        <IconButton size="small" type="button" aria-label="clear" onClick={handleClear}>
          <Close />
        </IconButton>
      )}
    </SearchInputWrapper>
  );
};

export default SearchPost;

const SearchInputWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  width: ${props => props.width ?? '235px'};
  padding: 0 4px;
  border: 1px solid #ccd0d7;

  & button {
    width: 28px;
    height: 28px;
  }
`;
