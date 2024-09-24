import { useNavigate } from 'react-router-dom';

// TODO: 게시판 타입 정의
const useRoute = () => {
  const navigate = useNavigate();

  const goToList = (boardType: string) => {
    navigate(`/board/${boardType}/list`);
  };

  const goToRead = ({ boardType, postId }: { boardType: string; postId: number }) => {
    navigate(`/board/${boardType}/view/${postId}`);
  };

  const goToWrite = ({ boardType, postId }: { boardType: string; postId?: number }) => {
    navigate(`/board/${boardType}/write${postId ? `/${postId}` : ''}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { goToList, goToRead, goToWrite, goBack };
};

export default useRoute;
