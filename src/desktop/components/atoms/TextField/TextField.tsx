import styled from 'styled-components';

interface InputProps {
  width?: string;
  height?: string;
  /**
   *  텍스트 색상
   */
  color?: string;
  /**
   *  TextField 배경 색상
   */
  bgColor?: string;
  /**
   *  TextField Border 색상
   */
  borderColor?: string;
  /**
   *  TextField Border Radius
   */
  borderRadius?: string;
  outline?: 'none' | 'full' | 'bottom';
}

const StyledTextField = styled.input<InputProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  border-radius: ${props => props.borderRadius};
  ${({ outline, borderColor }) => {
    switch (outline) {
      case 'none':
        return 'border: none; outline: none;';
      case 'full':
        return `
          border: 1px solid ${borderColor};
          outline-color: ${borderColor};
          `;
      case 'bottom':
        return `
          border-radius: 0;
          border: none;
          outline: none;
          border-bottom: 1px solid ${borderColor};
          &:focus {
            border-bottom: 2px solid ${borderColor};
          }
        `;
    }
  }};
  background: ${props => props.bgColor};
  padding: 0px 8px;
`;

const TextField = ({
  width = '200px',
  height = '40px',
  color = 'black',
  outline = 'full',
  bgColor = 'white',
  borderColor = 'black',
  borderRadius = '8px',
}: InputProps) => {
  return (
    <StyledTextField
      type="text"
      width={width}
      height={height}
      color={color}
      outline={outline}
      bgColor={bgColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
    />
  );
};

export default TextField;
