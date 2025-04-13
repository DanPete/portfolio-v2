import { type QueryParams } from 'sanity';
import { sanityClient } from 'sanity:client';

export const loadQuery = async <QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) => {
  const { result } = await sanityClient.fetch<QueryResponse>(
    query,
    params ?? {},
    { filterResponse: false },
  );

  return {
    data: result,
  };
};
