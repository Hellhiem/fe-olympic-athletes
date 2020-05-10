import React, { useEffect } from 'react';
import AppState from '../../types/common/AppState';
import {
  useParams,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAthleteResultsAction } from '../../store/athletes/actions';
import AthleteDetailsComponent from './AthleteDetails.component';

const AthleteDetailsContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAthleteResultsAction(id));
  }, [dispatch, id]);

  const [
    athlete,
    athleteResults,
  ] = useSelector(({ athlete }: AppState) => [
    athlete.athletesData.find(item => item.athlete_id === id),
    athlete.athleteResults,
  ]);

  return (
    <AthleteDetailsComponent athlete={athlete} athleteResults={athleteResults} />
  );
};

export default AthleteDetailsContainer;