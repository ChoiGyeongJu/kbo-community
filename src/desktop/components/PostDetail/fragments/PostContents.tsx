import DOMPurify from 'dompurify';
import styled from 'styled-components';

interface Props {
  contents: string;
}

const PostContents = ({ contents }: Props) => {
  return (
    <ContentWrapper>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(contents) }} />
    </ContentWrapper>
  );
};

export default PostContents;

const ContentWrapper = styled.div`
  padding: 20px 0;
  border-top: 1px solid lightgray;
`;
