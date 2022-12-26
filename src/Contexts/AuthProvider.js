import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user Observing");
            setUser(currentUser);
            setIsLoading(false)
        });
        return () => unsubscribe();
    }, [])


    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
        setIsLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email);
    }



    const authInfo = {
        createUser,
        userSignIn,
        user,
        setUser,
        userSignOut,
        updateUserProfile,
        isLoading,
        setIsLoading,
        googleLogin,
        resetPassword
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;