import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCf0RpGhTXAeo5X8ticSkb69dvQW0dXGzA",
    authDomain: "react-ecommerce-crown.firebaseapp.com",
    databaseURL: "https://react-ecommerce-crown.firebaseio.com",
    projectId: "react-ecommerce-crown",
    storageBucket: "react-ecommerce-crown.appspot.com",
    messagingSenderId: "425284556446",
    appId: "1:425284556446:web:0c7ef8f5ac994abeaa8d8f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;




