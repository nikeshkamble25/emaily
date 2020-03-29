import axios from "axios";
import { FETCH_USER, FETCH_SURVEY, LOGOUT } from "./types";

export const fetchUser = () => async dispatch => {
    dispatch(
        {
            type: FETCH_USER,
            payload: (await axios.get('/api/current_user')).data
        })
}


export const handleToken = (token) => async dispatch => {
    dispatch(
        {
            type: FETCH_USER,
            payload: (await axios.post('/api/stripe', token)).data
        })
}

export const logOut = () => async dispatch => {
    dispatch(
        {
            type: LOGOUT,
            payload: (await axios.get('/api/logout')).data
        })
}

export const submitSurvey = (values, history) => async dispatch => {
    try {
        const res = await axios.post('/api/surveys', values);
        if (res.data.error) {
            dispatch(
                {
                    type: FETCH_SURVEY,
                    payload: res.data
                })
        } else {
            dispatch(
                {
                    type: FETCH_USER,
                    payload: res.data
                })
            history.push('/surveys');
        }
    } catch (e) {
    }

}

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    dispatch(
        {
            type: FETCH_SURVEY,
            payload: res.data
        })
}

export const deleteSurvey = (surveyId) => async dispatch => {

    const res = await axios.put('/api/surveys/', { surveyId });
    debugger;
    dispatch(
        {
            type: FETCH_SURVEY,
            payload: res.data
        })
}


