import React, { useEffect } from 'react';
import AppState from '../../types/common/AppState';
import Athlete from '../../types/athletes/Athlete';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAthletesAction } from '../../store/athletes/actions';
import AthleteComponent from './Athlete.component';

const AthleteContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAthletesAction());
  }, [dispatch]);

  const athletes: Athlete[] = useSelector(({ athlete }: AppState) => athlete.athletesData);

  return (
    <AthleteComponent athletes={athletes}/>
  );
};

export default AthleteContainer;