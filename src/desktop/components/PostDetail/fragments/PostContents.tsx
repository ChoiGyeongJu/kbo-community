import ReactQuill from 'react-quill';

import styled from 'styled-components';

interface Props {
  contents: string;
}

const PostContents = ({ contents }: Props) => {
  return (
    <ContentWrapper>
      <ReactQuill readOnly value={contents} modules={{ toolbar: false }} className="contents" />
    </ContentWrapper>
  );
};

export default PostContents;

const ContentWrapper = styled.div`
  padding: 20px 0;
  border-top: 1px solid lightgray;

  & .contents {
    height: auto;
    min-height: 300px;
    & .ql-snow {
      border: none;
    }
  }
`;
