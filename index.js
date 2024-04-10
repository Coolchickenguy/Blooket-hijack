const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
/*const yt = {
    id: "https://id.blooket.com",
    questionfielder: "https://qf.blooket.com",
    play: "https://play.blooket.com",
    dashboard: "https://dashboard.blooket.com",
    firebase: "https://fb.blooket.com",
    www: "https://www.blooket.com"
};/*
/*var nA = qa.create({
    baseURL: yt.firebase,
    withCredentials: !0
});*/
var animalnames /*d*/ = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Alpaca", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Deer", "Wolf", "Beaver", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Gorilla", "Hippo", "Rhino", "Giraffe", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus"];
/*_ae*/ var colors = ["Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"];
async function post(url,json){
https.request()
}
module.exports = class blooket{
    id;
    name;
    joined;
    isPlus;
    isRandomNames;
    constructor(){};
    async join(id,name){
        console.log(id)
        var testres = await (await fetch(`https://fb.blooket.com/c/firebase/id?id=${id}`,  {headers: {
            cookie: 'bsid=MTcxMjY5ODMxN3x6U3I5am5VekxWZ0l6NVM2X3F4eWlaU1huaVFySE5aaWV5V05oQjNtUXVkV2tfcnlFOHZrczV4Wm4wST18qbo4Axp6mqz-_F40kAFQhRj-nrAaEuB2M1R-QBWL1D4='
    }})).text();
        console.log(testres, "res")
        if(testres.success == false){
            throw new Error(testres.msg);
        }

        var p = {
            gameCode: id
        };
        var hosted = post("https://ac.blooket.com/api/playersessions/hosted", p);
        var t = hosted.data.t;
        var r = hosted.data.n;
        var landings = await (await fetch("https://classic.blooket.com/api/playersessions/landings",{
            
            method: "POST",
            body:JSON.stringify({

            }),
            headers: {
                "Content-type": "application/json"
            
        }})).json();
        this.isPlus = testres.isPlus;
        this.isRandomNames = testres.isRandomNames;
        this.id = id;
        this.name = name;
        this.t  = t;
        console.log(n);

    };
}