import React from 'react';
import { css } from '@emotion/core';

const base = css`
  font-size: 5rem;
  font-family: Helvetica, Arial, sans-serif;
`;
const BigText = ({ children }) => <span css={base}>{children}</span>;

export default BigText;
