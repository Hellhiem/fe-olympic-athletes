import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Athlete from '../../types/athletes/Athlete';
import ThemeType from '../../types/common/ThemeType';
import AthleteResult from '../../types/athletes/AthleteResult';
import { NavigationBar, AthleteAvatar, AthleteAttribute } from '../../components';

type PropsType = {
  athlete?: Athlete;
  athleteResults: AthleteResult[];
};

const Container = styled.div``;

const NoAthlete = styled.h1`
  text-align: center;
  color: ${({ theme }: { theme: ThemeType; }) => theme.colors.darkRed};
`;

const AthleteDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 64px;
  background-color: ${({ theme }: { theme: ThemeType; }) => theme.colors.darkGrey};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const AthleteAvatarContainer = styled.div`
  @media (max-width: 800px) {
    display:flex;
    justify-content: center;
  }
`;

const AthleteName = styled.h1`
  color: ${({ theme }: { theme: ThemeType; }) => theme.colors.white};

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const AthleteAttributesContainer = styled.div``;

const AthleteBioContainer = styled.div`
  padding: 32px;
`;

const BioTitle = styled.h1`
  color: ${({ theme }: { theme: ThemeType; }) => theme.colors.black};
`;

const AthleteBio = styled.p``;

const AthleteDetailsComponent = ({ athlete, athleteResults }: PropsType) => {
  const { t } = useTranslation();
  console.log(athlete);
  console.log(athleteResults);
  return athlete ? (
    <Container>
      <NavigationBar />
      <AthleteDetailsContainer>
        <AthleteAvatarContainer>
          <AthleteAvatar photoId={athlete.photo_id} big />
        </AthleteAvatarContainer>
        <AthleteAttributesContainer>
          <AthleteName>{`${athlete.name} ${athlete.surname}`}</AthleteName>
          <AthleteAttribute attribute={t('AthleteDetails.DOB')} detail={athlete.dateOfBirth}/>
          <AthleteAttribute attribute={t('AthleteDetails.Weight')} detail={`${athlete.weight} kg`} />
          <AthleteAttribute attribute={t('AthleteDetails.Height')} detail={`${athlete.height} cm`} />
        </AthleteAttributesContainer>
      </AthleteDetailsContainer>
      <AthleteBioContainer>
        <BioTitle>{t('AthleteDetails.Bio')}</BioTitle>
        <AthleteBio>{athlete.bio}</AthleteBio>
      </AthleteBioContainer>
    </Container>
  ) : (
    <Container>
      <NoAthlete>{t('AthleteDetails.NoAthlete')}</NoAthlete>
    </Container>
  );
};

export default AthleteDetailsComponent;