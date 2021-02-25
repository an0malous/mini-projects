import streams from '../apis/streams';

export const signIn = id => ({
   type: 'SIGN_IN',
   payload:id
});

export const signOut = () =>({
   type: 'SIGN_OUT'
});

export const createStream = (formValues) => async dispatch=>{
   streams.post('/streams', formValues);
};