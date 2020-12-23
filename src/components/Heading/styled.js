import styled from 'styled-components';

const baseStyles = (color) => {
  return `
    line-height: 1.2;
    color:${color != undefined ? color:'black'}
  `;
}
const H1 = styled.h1 `
  ${({color}) => baseStyles(color)}
  font-size: 32px;
`;
const H2 = styled.h2 `
  ${({color}) => baseStyles(color)}
  font-size: 24px;
`;
const H3 = styled.h3 `
  ${({color}) => baseStyles(color)}
  font-size: 20px;
`;
const H4 = styled.h4 `
  ${({color}) => baseStyles(color)}
  font-size: 16px;
`;
export const Heading = {
    H1,
    H2,
    H3,
    H4
};