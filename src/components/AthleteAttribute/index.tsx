import React from 'react';
import styled from 'styled-components';
import ThemeType from '../../types/common/ThemeType';

type PropsType = {
  attribute: string;
  detail: string | number;
};

const Container = styled.div``;

const Attribute = styled.p`
  font-weight: bold;
  color: ${({ theme }: { theme: ThemeType; }) => theme.colors.white};
  opacity: 0.6;
`;

const Detail = styled.p`
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.paragraphFontSize};
  color: ${({ theme }: { theme: ThemeType; }) => theme.colors.white};
`;

const AthleteAttribute = ({ attribute, detail } : PropsType) => {
  return (
    <Container>
      <Attribute>{attribute.toUpperCase()}</Attribute>
      <Detail>{detail}</Detail>
    </Container>
  );
};

export default AthleteAttribute;