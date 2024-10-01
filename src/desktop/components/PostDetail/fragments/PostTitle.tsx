import { styled } from 'styled-components';

const PostTitle = ({ title }: { title: string }) => {
  return <Wrapper>{title}</Wrapper>;
};

export default PostTitle;

const Wrapper = styled.span`
  width: 100%;
  padding: 0 20px;
  font-size: 22px;
  font-weight: 700;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
`;
