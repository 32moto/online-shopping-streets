import { FC } from 'react';
import styled, { css } from 'styled-components';

import COLORS from '@/constants/colors';
import MEDIA_QUERY from '@/constants/mediaQuery';

import { StoreLinkType } from '@/types/domains/store';

export const StorePopupLink: FC<{ link: StoreLinkType }> = ({ link }) => {
  return (
    <Wrapper
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      left={link.left}
      right={link.right}
      top={link.top}
      bottom={link.bottom}
    >
      {link.title}
    </Wrapper>
  );
};

export default StorePopupLink;

const Wrapper = styled.a<{
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 40px;
  padding: 5px 30px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: ${COLORS.WHITE};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);

  position: absolute;
  ${({ left, right, top, bottom }) => css`
    left: ${left && left + 'px'};
    right: ${right && right + 'px'};
    top: ${top && top + 'px'};
    bottom: ${bottom && bottom + 'px'};
  `}

  @media ${MEDIA_QUERY.SP} {
    height: 30px;
    padding: 5px 20px;
    border-radius: 15px;
    font-size: 12px;

    ${({ left, right, top, bottom }) => css`
      left: ${left && left - 30 + 'px'};
      right: ${right && right - 50 + 'px'};
      top: ${top && top - 120 + 'px'};
      bottom: ${bottom && bottom - 50 + 'px'};
    `}
  }
`;
