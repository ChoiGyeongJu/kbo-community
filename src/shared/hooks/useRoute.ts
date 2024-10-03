import { useNavigate } from 'react-router-dom';

import { BoardType } from '$shared/types';

const useRoute = () => {
  const navigate = useNavigate();

  const goToList = (boardType: BoardType) => {
    navigate(`/${boardType}/list`);
  };

  const goToRead = ({ boardType, postId }: { boardType: BoardType; postId: number }) => {
    navigate(`/${boardType}/view/${postId}`);
  };

  const goToWrite = ({ boardType, postId }: { boardType: BoardType; postId?: number }) => {
    navigate(`/${boardType}/write${postId ? `/${postId}` : ''}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { goToList, goToRead, goToWrite, goBack };
};

export default useRoute;
