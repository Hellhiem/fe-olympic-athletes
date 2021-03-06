import { AthletesActionsType } from '../../types/athletes/AthleteActions';
import AthleteReducerConstants from '../../types/athletes/AthleteReducerConstants';
import AthleteStateType from '../../types/athletes/AthleteStateType';

const initialState: AthleteStateType = {
  isFetchingAthlete: false,
  isFetchingAthleteResult: false,
  athletesData: [],
  athleteResults: [],
};

function athlete(state: AthleteStateType = initialState, action: AthletesActionsType) {
  switch (action.type) {
    case AthleteReducerConstants.ATHLETE_FETCH_REQUEST:
      return {
        ...state,
        isFetchingAthlete: true,
      };
    case AthleteReducerConstants.ATHLETE_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingAthlete: false,
        athletesData: action.response.data,
      };
    case AthleteReducerConstants.ATHLETE_FETCH_FAIL:
      return {
        ...state,
        isFetchingAthlete: false,
        error: action.error,
      };
    case AthleteReducerConstants.ATHLETE_RESULTS_FETCH_REQUEST:
      return {
        ...state,
        isFetchingAthleteResult: true,
      };
    case AthleteReducerConstants.ATHLETE_RESULTS_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingAthleteResult: false,
        athleteResults: action.response.data,
      };
    case AthleteReducerConstants.ATHLETE_RESULTS_FETCH_FAIL:
      return {
        ...state,
        isFetchingAthleteResult: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export { athlete, initialState };