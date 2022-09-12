import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDUDxVkniD1OFP0-AVYMkQCngt1R-TiI8",
    authDomain: "laundry-omiist.firebaseapp.com",
    databaseURL: "https://laundry-omiist-default-rtdb.firebaseio.com",
    projectId: "laundry-omiist",
    storageBucket: "laundry-omiist.appspot.com",
    messagingSenderId: "841925963131",
    appId: "1:841925963131:web:c6dbbb36ecc55d295ae1de"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);