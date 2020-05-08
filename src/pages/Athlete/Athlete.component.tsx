import React from 'react';
import styled from 'styled-components';
import Athlete from '../../types/athletes/Athlete';
import { AthleteListItem, NavigationBar } from '../../components';

type PropsType = {
  athletes: Athlete[],
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AthleteComponent = ({ athletes }: PropsType) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Container>
        {athletes.map(athlete => {
          return (
            <AthleteListItem
              key={athlete.athlete_id}
              name={`${athlete.name} ${athlete.surname}`}
              photoId={athlete.photo_id}
            />
          );
        })
        }
      </Container>
    </React.Fragment>
  );
};

export default AthleteComponent;