import { initializeApp } from '@firebase/app'    
import { getDatabase } from "@firebase/database";
import { fetch } from "node-fetch";

    // Add Firebase products that you want to use
    import { getAuth, setPersistence, inMemoryPersistence, signInWithCustomToken } from '@firebase/auth'

var varables = {
    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
    authDomain: "blooket-2020.firebaseapp.com",
    projectId: "blooket-2020",
    storageBucket: "blooket-2020.appspot.com",
    messagingSenderId: "741533559105",
    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
    measurementId: "G-S3H5NGN10Z",
    databaseURL: "https://fb.blooket.com"
};
var app = initializeApp(varables);
var it = getAuth(app);
var tojoin = fetch()
setPersistence(it,inMemoryPersistence);
signInWithCustomToken(it,n)