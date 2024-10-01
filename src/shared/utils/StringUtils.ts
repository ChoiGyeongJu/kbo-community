// quill 에디터 내부가 비어있어도 빈 태그들로 인해 hook form의 isValid가 제대로 동작하지 않는 이슈 해결
export const isContentEmpty = (content: string) => {
  const trimmedContent = content.replace(/<(.|\n)*?>/g, '').trim();

  return !trimmedContent;
};
