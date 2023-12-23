import React, { useContext } from 'react';
import { googleAuthProvider, auth } from './firebase';
import { getRedirectResult, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { UserContext } from './Context/UserContext';

const SignIn = () => {

    const { user, setUser } = useContext(UserContext)

    const handelSignIn = () => {
        // signInWithPopup(auth, googleAuthProvider).then((data) => {
        //     console.log(data);
        // })
        signInWithRedirect(auth, googleAuthProvider)

        getRedirectResult(auth).then((result) => {
            // The signed-in user info.
            const user = result.user;
            setUser(user)
        }).catch((error) => {
            // Handle errors here.
        });
    }

    return (
        <div>
            <button onClick={handelSignIn}>SignUp</button>
        </div>
    );
}

export default SignIn;
