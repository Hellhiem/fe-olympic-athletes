import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { OBSLogo } from '../../assets/images';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-left: 16px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const NavigationBar = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Logo src={OBSLogo}/>
      <Title>{t('Common.Title')}</Title>
    </Container>
  );
};

export default NavigationBar;