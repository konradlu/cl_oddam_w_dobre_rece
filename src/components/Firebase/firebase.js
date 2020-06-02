import React from "react";
import app from 'firebase/app';


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

class Firebase {
    constructor() {
        this.app = app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.firestore();
    }

    get currenUser() {
        return this.auth.currentUser
    }

}
export default Firebase;

    //foundations = () => this.db.collection('cl-oddam-w-dobre-rece').doc("fundacje");
    //locals = () => this.db.ref('lokalne');
    //organisations = () => this.db.ref('org-pozarzadowe');

