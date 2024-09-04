import { useParams } from 'react-router-dom';

import { useSuspenseQuery } from '@tanstack/react-query';

import { postQueries } from '$shared/service/post';

const Test = () => {
  const { postId } = useParams();
  const { data } = useSuspenseQuery(postQueries.serviceGetPost({ postId: Number(postId) }));
  const postInfo = data.post;

  return <div>{postInfo.title}</div>;
};

export default Test;
