import React from 'react';

import { Button as MuiButton } from '@mui/material';

import styled from 'styled-components';

interface ButtonProps extends React.ComponentProps<typeof MuiButton> {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /**
   *  버튼 텍스트 사이즈
   */
  fontSize?: number;
  /**
   * 버튼 diable 여부
   */
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledButton = styled(MuiButton)<ButtonProps>`
  padding: 10px 20px;
  font-size: ${props => `${props.fontSize}px `} !important;
  border-radius: 4px;
  cursor: pointer;
`;

const UIButton = ({
  variant = 'text',
  fontSize = 13,
  color,
  disabled = false,
  children,
  ...props
}: ButtonProps) => (
  <StyledButton variant={variant} fontSize={fontSize} color={color} disabled={disabled} {...props}>
    {children}
  </StyledButton>
);

export default UIButton;
