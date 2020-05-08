import React from 'react';
import AthleteAvatar from '../AthleteAvatar';
import styled from 'styled-components';
import ThemeType from '../../types/common/ThemeType';

type PropsType = {
  photoId: number;
  name: string;
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const AthleteName = styled.p`
  text-align: center;
  font-size: ${({ theme }: { theme: ThemeType; }) => theme.paragraphFontSize};
  font-weight:bold;
`;

const AthleteListItem = ({ photoId, name }: PropsType) => {
  return (
    <Container>
      <AthleteAvatar photoId={photoId}/>
      <AthleteName>{name}</AthleteName>
    </Container>
  );
};

export default AthleteListItem;