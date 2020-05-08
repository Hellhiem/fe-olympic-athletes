import { ThunkDispatch } from 'redux-thunk';
import AppState from '../../types/common/AppState';
import { fetchAthletes, fetchAthleteResults } from '../../services/athletes';
import AthleteReducerConstants from '../../types/athletes/AthleteReducerConstants';

const fetchAthletesAction = () => {
  return (dispatch: ThunkDispatch<AppState, void, any>) => {
    return dispatch({
      types: [
        AthleteReducerConstants.ATHLETE_FETCH_REQUEST,
        AthleteReducerConstants.ATHLETE_FETCH_SUCCESS,
        AthleteReducerConstants.ATHLETE_FETCH_FAIL,
      ],
      asyncRequest: {
        request: () => {
          return fetchAthletes();
        },
      },
    });
  };
};

const fetchAthleteResultsAction = (athleteId: number) => {
  return (dispatch: ThunkDispatch<AppState, void, any>) => {
    return dispatch({
      types: [
        AthleteReducerConstants.ATHLETE_RESULTS_FETCH_REQUEST,
        AthleteReducerConstants.ATHLETE_RESULTS_FETCH_SUCCESS,
        AthleteReducerConstants.ATHLETE_RESULTS_FETCH_FAIL,
      ],
      asyncRequest: {
        request: () => {
          return fetchAthleteResults(athleteId);
        },
      },
    });
  };
};

export { fetchAthletesAction, fetchAthleteResultsAction };