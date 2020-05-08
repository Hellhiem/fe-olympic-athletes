
import { Action } from 'redux';
import Athlete from '../../types/athletes/Athlete';
import AthleteResult from '../../types/athletes/AthleteResult';
import AthleteReducerConstants from './AthleteReducerConstants';

interface AthleteFetchRequestType extends Action {
  type: AthleteReducerConstants.ATHLETE_FETCH_REQUEST;
}

interface AthleteFetchRequestSuccessType extends Action {
  type: AthleteReducerConstants.ATHLETE_FETCH_SUCCESS;
  response: {
    data: Athlete,
  };
}

interface AthleteFetchRequestFailType extends Action {
  type: AthleteReducerConstants.ATHLETE_FETCH_FAIL;
  error: string;
}

interface AthleteResultsFetchRequestType extends Action {
  type: AthleteReducerConstants.ATHLETE_RESULTS_FETCH_REQUEST;
}

interface AthleteResultsFetchRequestSuccessType extends Action {
  type: AthleteReducerConstants.ATHLETE_RESULTS_FETCH_SUCCESS;
  response: {
    data: AthleteResult[],
  };
}

interface AthleteResultsFetchRequestFailType extends Action {
  type: AthleteReducerConstants.ATHLETE_RESULTS_FETCH_FAIL;
  error: string;
}

type AthletesActionsType =
  AthleteFetchRequestType |
  AthleteFetchRequestSuccessType |
  AthleteFetchRequestFailType |
  AthleteResultsFetchRequestType |
  AthleteResultsFetchRequestSuccessType |
  AthleteResultsFetchRequestFailType;

export type {
  AthletesActionsType,
  AthleteFetchRequestType,
  AthleteFetchRequestSuccessType,
  AthleteFetchRequestFailType,
  AthleteResultsFetchRequestType,
  AthleteResultsFetchRequestSuccessType,
  AthleteResultsFetchRequestFailType,
};