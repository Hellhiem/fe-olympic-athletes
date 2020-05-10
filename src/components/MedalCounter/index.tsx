import React from 'react';
import styled from 'styled-components';
import AthleteResult from '../../types/athletes/AthleteResult';
import ThemeType from '../../types/common/ThemeType';
import MedalNames from '../../types/athletes/MedalNames';
import MedalType from '../../types/athletes/MedalType';
import { BronzeMedal, SilverMedal, GoldMedal } from '../../assets/images';

type PropsType = {
  athleteResult: AthleteResult,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const MedalImage = styled.img`
  width: 30px;
  height: 30px;
`;

const MedalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MedalCounterText = styled.p`
  color: ${({ theme }: { theme: ThemeType; }) => theme.colors.white};
  margin: 8px;
`;

const MedalCounterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
`;

const City = styled.h4`
  display: flex;
  flex: 1;
  color: ${({ theme }: { theme: ThemeType; }) => theme.colors.white};
`;

const MedalCounter = ({ athleteResult }: PropsType) => {

  const renderMedalImage = (medalType: MedalType) => {
    switch (medalType) {
      case MedalNames.BronzeMedal:
        return <MedalImage src={BronzeMedal} alt='bronze medal image' />;
      case MedalNames.SilverMedal:
        return <MedalImage src={SilverMedal} alt='silver medal image' />;
      case MedalNames.GoldMedal:
        return <MedalImage src={GoldMedal} alt='gold medal image' />;
    }
  };

  const renderMedalCounter = (medalType: MedalType, medalCount: number) => {
    return (
      <MedalContainer>
        <MedalCounterText>{medalCount}</MedalCounterText>
        {renderMedalImage(medalType)}
      </MedalContainer>
    );
  };

  return (
    <Container>
      <City>{`${athleteResult.city} ${athleteResult.year}:`}</City>
      <MedalCounterContainer>
        {renderMedalCounter(MedalNames.GoldMedal, athleteResult.gold)}
        {renderMedalCounter(MedalNames.SilverMedal, athleteResult.silver)}
        {renderMedalCounter(MedalNames.BronzeMedal, athleteResult.bronze)}
      </MedalCounterContainer>
    </Container>
  );
};

export default MedalCounter;