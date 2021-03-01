import streams from '../apis/streams';
import streamShow from '../components/streams/StreamShow';
import history from '../history';

export const signIn = (id) => ({
   type: 'SIGN_IN',
   payload: id
});

export const signOut = () =>({
   type: 'SIGN_OUT'
});

export const createStream = (formValues) => async (dispatch, getState)=>{
   const { userId } = getState().auth;
   console.log(userId)
   const response = await streams.post('/streams', {...formValues, userId });

   dispatch ({ type: 'CREATE_STREAM', payload: response.data });
   history.push('/')
};

export const fetchStreams = () => async dispatch => {
   const response = await streams.get('/streams');

   dispatch({ type: 'FETCH_STREAMS', payload: response.data });
};

export const fetchStream = id => async dispatch => {
   const response = await streams.get(`/streams/${id}`) 
   
   dispatch({ type: 'FETCH_STREAM', payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
   const response = await streams.patch(`streams/${id}`, formValues);

   dispatch({ type: 'EDIT_STREAM', payload: response.data })
   history.push('/')
};

export const deleteStream = (id) => async dispatch => {
   await streams.delete(`/streams/delete/${id}`);

   dispatch({ type: 'DELETE_STREAM', payload: id })
}