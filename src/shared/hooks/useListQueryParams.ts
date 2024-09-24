import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export type SizeOptions = 10 | 30 | 50 | 100;

interface QueryParams {
  page: number;
  size: SizeOptions;
  keyword?: string;
}

const defaultParams: QueryParams = {
  page: 1,
  size: 10,
  keyword: undefined,
};

const useListQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParams = useCallback((): QueryParams => {
    return {
      page: Number(searchParams.get('page')) || defaultParams.page,
      size: (Number(searchParams.get('size')) as SizeOptions) || defaultParams.size,
      keyword: searchParams.get('keyword') || defaultParams.keyword,
    };
  }, [searchParams]);

  const setQueryParams = useCallback(
    (newParams: Partial<QueryParams>) => {
      const updatedParams = {
        ...getQueryParams(),
        ...newParams,
      };

      const params = new URLSearchParams();
      if (updatedParams.page) params.set('page', updatedParams.page.toString());
      if (updatedParams.size) params.set('size', updatedParams.size.toString());
      if (updatedParams.keyword) params.set('keyword', updatedParams.keyword);

      setSearchParams(params);
    },
    [setSearchParams, getQueryParams]
  );

  //  최초 진입 시 page, size 세팅
  useEffect(() => {
    if (!searchParams.toString()) {
      setQueryParams({
        page: defaultParams.page,
        size: defaultParams.size,
      });
    }
  }, [searchParams, setQueryParams]);

  return {
    getQueryParams,
    setQueryParams,
  };
};

export default useListQueryParams;
