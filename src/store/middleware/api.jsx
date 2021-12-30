import * as actions from '../api';
import { BASE_URL } from '../../constants/urls';

const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiRequest.type) return next(action);

    next(action);

    const { url, method, data, headers, onSuccess, onError } = action.payload;

    const profileUrl = BASE_URL+url;

    try {
        const resp = await fetch(profileUrl, {
            method: 'POST',
            body: data,
            headers,
        })

        const res = await resp.json();
        const response = res;

        console.log('now', response)

        // console.log('from try', (response.data));
        // General
        dispatch(actions.apiRequestSuccess(response.data));
        // Specific
        if (onSuccess) dispatch({type: onSuccess, payload: response.data});
    } catch(error) {
        // General
        dispatch(actions.apiRequestFailed(error.message));
        // Specific
        if (onError) dispatch({type: onError, payload: error.message});
    }
};

export default api;