import React from 'react';
import styled, { keyframes } from 'styled-components';
import { baseUrl } from '../../services/constants';

type PropsType = {
  photoId: number;
};

const zoom = keyframes`
  from {
    width: 120px;
  height: 120px;
  border-radius: 60px;
  }

  to {
    width: 130px;
    height: 130px;
    border-radius: 65px;
  }
`;

const AthleteMiniature = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  &:hover {
    animation: ${zoom} 0.4s linear both;
  }
`;

const AthleteAvater = ({photoId}: PropsType) => {
  const photoUri = `${baseUrl}/athletes/${photoId}/photo`;

  return (
    <AthleteMiniature src={photoUri} alt='athlete_image' />
  );
};

export default AthleteAvater;