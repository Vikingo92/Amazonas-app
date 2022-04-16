import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { google, facebook } from '../firebase/firebaseConfig';
import { types } from "../types/types";

// Logout
export const logout = () => {
    return(dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(res => {
            dispatch(logoutSincrono())
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const logoutSincrono = () => {
    return {
        type: types.logout
    }
}

export const loginFacebook = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))
                console.log('exitoso')
            })
            .catch(error => {
                console.log(error)
            })
    }
}


export const loginEmailPassword = (email, password) => {
    

    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                dispatch(loginSincrono(user.uid, user.displayName))
                console.log('Bienvenidos');
            })
            .catch(error => {
                console.log(error);
                console.log('El usuario no exite');

            })
    }
}

export const loginGoogle = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginSincrono(user.uid, user.displayName))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const loginSincrono = (id, displayname) => {

    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}