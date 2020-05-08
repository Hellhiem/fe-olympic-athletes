
import axios from 'axios';
import { baseUrl } from '../constants';

const fetchAthletes = () => {
  return axios
    .get(`${baseUrl}/athletes`, {})
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

const fetchAthleteResults = (athleteId: number) => {
  return axios
    .get(`${baseUrl}/athletes/${athleteId}/results`, {})
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export { fetchAthletes, fetchAthleteResults };