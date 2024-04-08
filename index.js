const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { getFirestore, collection, getDocs } = require("firebase/firestore/lite") 
const yt = {
    id: "https://id.blooket.com",
    questionfielder: "https://qf.blooket.com",
    play: "https://play.blooket.com",
    dashboard: "https://dashboard.blooket.com",
    firebase: "https://fb.blooket.com",
    www: "https://www.blooket.com"
};
/*var nA = qa.create({
    baseURL: yt.firebase,
    withCredentials: !0
});*/
var animalnames /*d*/ = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Alpaca", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Deer", "Wolf", "Beaver", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Gorilla", "Hippo", "Rhino", "Giraffe", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus"];
/*_ae*/ var colors = ["Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"];
var yHe = {
    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
    authDomain: "blooket-2020.firebaseapp.com",
    projectId: "blooket-2020",
    storageBucket: "blooket-2020.appspot.com",
    messagingSenderId: "741533559105",
    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
    measurementId: "G-S3H5NGN10Z"
};
module.exports = class blooket{
    id;
    name;
    joined;
    isPlus;
    isRandomNames;
    constructor(){};
    async join(id,name){
       /* var landings = await (await fetch("https://classic.blooket.com/api/playersessions/landings",{headers:{
            method: "POST",
            body:JSON.stringify({

            }),
            headers: {
                "Content-type": "application/json"
              }
        }})).json();*/
        var app = initializeApp(yHe);
       console.log(collection(getFirestore(app),"id"));
return
       var testres = await (await fetch(`https://fb.blooket.com/c/firebase/id?id=${id}`)).json();
        if(testres.success == false){
            throw new Error(testres.msg);
        }
        this.isPlus = testres.isPlus;
        this.isRandomNames = testres.isRandomNames;
        this.id = id;
        this.name = name;
    };
}