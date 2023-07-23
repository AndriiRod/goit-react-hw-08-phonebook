import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid #eaecf0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 28px;
  padding-bottom: 18px;
`;

export const NavLinkWrap = styled(NavLink)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 6px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  color: #667085;

  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #3f9bfc;
  }
  &.active::after {
    content: '';
    position: absolute;
    bottom: -19px;
    left: 0;

    display: block;
    height: 2px;
    width: 100%;

    background-color: #3f9bfc;

    animation: underline 800ms cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: left;
  }

  @keyframes underline {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;

export const Counter = styled.p`
  text-align: center;
  border-radius: 4px;
  width: 30px;
  height: 40px
  font-size: 12px;
  background-color: #f4f8fb;
`;
