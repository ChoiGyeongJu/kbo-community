import styled from 'styled-components';

import { UIButton } from '../UI/UIButton';

import LogoIcon from '$assets/logo/logo.jpg';

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <img src={LogoIcon} />
        <UIButton className="login-button">Login</UIButton>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 9;
  display: flex;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;

  & img {
    height: 50px;
  }

  & .header-content {
    width: 1024px;
    display: flex;
    align-items: center;
    margin: 0 auto;

    & .login-button {
      margin-left: auto;
    }
  }
`;
