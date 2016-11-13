import axios from 'axios';

export function incrementCounter() {
  return {
    type: 'INCREMENT'
  };
}

export function decrementCounter() {
  return {
    type: 'DECREMENT'
  };
}

export function fetchSites() {
  return async dispatch => {
    dispatch({
      type: 'FETCH_SITES_REQUEST'
    });

    try {
      const response = await axios.get('/sites');
      const data = response.data;
      dispatch({
        type: 'FETCH_SITES_SUCCESS',
        data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_SITES_ERROR',
        error
      });
    }
  };
}
