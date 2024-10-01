import { Controller, useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { TextField, UIButton } from '$desktop/components';

import { useCreatePostMutation } from '$shared/service/post/createPost';
import { isContentEmpty } from '$shared/utils';

interface PostFormData {
  title: string;
  contents: string;
}

const WritePage = () => {
  const { category } = useParams();
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm<PostFormData>({ mode: 'onChange' });

  const createPostMutation = useCreatePostMutation({});
  const handleClickSubmit = (data: PostFormData) => {
    createPostMutation.mutate(data);
  };

  return (
    <WriteWrapper onSubmit={handleSubmit(handleClickSubmit)}>
      <TextField
        width="unset"
        outline="bottom"
        borderColor="lightgray"
        placeholder="제목을 입력해주세요."
        {...register('title', { required: true })}
      />
      <Controller
        name="contents"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div className="quill">
            <ReactQuill
              value={field.value}
              onChange={value => {
                if (isContentEmpty(value)) {
                  field.onChange('');
                } else {
                  field.onChange(value);
                }
              }}
              placeholder="내용을 입력해주세요."
            />
          </div>
        )}
      />
      <ButtonWrapper>
        <UIButton type="submit">취소</UIButton>
        <UIButton variant="contained" type="submit" disabled={!isValid || isSubmitting}>
          등록
        </UIButton>
      </ButtonWrapper>
    </WriteWrapper>
  );
};

export default WritePage;

const WriteWrapper = styled.form`
  width: 900px;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  & .quill {
    height: 500px;
  }
`;

const ButtonWrapper = styled.div`
  margin: 50px 0 0 auto;
  display: flex;
  gap: 12px;
`;
