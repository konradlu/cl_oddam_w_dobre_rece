import React, {useEffect, useState} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './User.scss';
//import {NavLink} from "react-router-dom";


export default function User() {
    return(
        <div>
            <h1>User</h1>
        </div>
    )
}
/*

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASURMENT_ID,

};

firebase.initializeApp(firebaseConfig);

const uiConfig = {
    signInSuccessUrl: '/signedIn',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
    }
};

export default function User() {

    const [isSignedIn, setIsSignedIn] = useState(false)
    const [foundations, setFoundations] = useState([])

    useEffect( ()=>{
        firebase.firestore()
            .collection('fundacje')
            .onSnapshot( querySnapshot =>{
                const elements = [];
                querySnapshot.forEach(el => elements.push({id: el.id, ...el.data() }))
                console.log(elements);
                setFoundations(elements)
                console.log(foundations);
            } )
    }, [] )

    useEffect( ()=>{
        firebase.auth().onAuthStateChanged(
            (user) => setIsSignedIn(!!user)
        );
    }, [] );



    if (!isSignedIn) {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
        );
    }
    return (
        <div>
            <h1>My App</h1>
            <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
            <a onClick={() => firebase.auth().signOut()}>Sign-out</a>

            <ul>
                {  }
            </ul>
        </div>
    );

}*/
