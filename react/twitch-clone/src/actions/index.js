export const signIn = id => ({
   type: 'SIGN_IN',
   payload:id
});

export const signOut = () =>({
   type: 'SIGN_OUT'
});