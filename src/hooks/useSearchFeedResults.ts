import { skipToken } from '@reduxjs/toolkit/query';
import { useGetSearchResultsQuery } from 'api/endpoints/search.api';
import { useSearchParams } from 'react-router-dom';

interface SearchFeedResultsArgs {
  keyword: string;
}

const useSearchFeedResults = (args?: SearchFeedResultsArgs) => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get('category_query');
  const keyword = args?.keyword || params || null;

  const { data } = useGetSearchResultsQuery(keyword ? { keyword } : skipToken);

  return {
    searchFeedResults: data?.items,
  };
};

export { useSearchFeedResults };
