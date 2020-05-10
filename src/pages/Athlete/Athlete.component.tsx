import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Athlete from '../../types/athletes/Athlete';
import { AthleteListItem, NavigationBar } from '../../components';

type PropsType = {
  athletes: Athlete[],
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Redirector = styled.div``;

const AthleteComponent = ({ athletes }: PropsType) => {
  const history = useHistory();

  const navigateToAthleteDetails = (athleteId: string) => {
    history.push(`/athlete/${athleteId}`);
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <Container>
        {athletes.map(athlete => {
          return (
            <Redirector
              key={athlete.athlete_id}
              onClick={() => navigateToAthleteDetails(athlete.athlete_id)}
            >
              <AthleteListItem
                name={`${athlete.name} ${athlete.surname}`}
                photoId={athlete.photo_id}
              />
            </Redirector>
          );
        })
        }
      </Container>
    </React.Fragment>
  );
};

export default AthleteComponent;