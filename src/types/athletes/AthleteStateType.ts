import Athlete from './Athlete';
import AthleteResult from './AthleteResult';

type AthleteStateType = {
  isFetchingAthlete: boolean,
  isFetchingAthleteResult: boolean,
  athletesData: Athlete[],
  athleteResults: AthleteResult[],
};

export default AthleteStateType;