import { initializeApp } from '@firebase/app'    
import { getDatabase,ref, onValue, get } from "@firebase/database";
import { createInterface } from 'readline';
import "node-fetch";

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
};
var id=1038636;
/*
Mu.put("https://fb.blooket.com/c/firebase/join", {
                id: e,
                name: n
            });
*/
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter id",async function(a){
    var name = (Math.random().toString().substring(2,6) + "g").toString();

    var tojoin = await (await fetch("https://fb.blooket.com/c/firebase/join",{
    method: "PUT",
    body:JSON.stringify({
        id: a.toString(),
        name: name.toString()
    }),
    headers: {
        "Content-type": "application/json",
        "cookie": 'bsid=MTcxMjY5ODMxN3x6U3I5am5VekxWZ0l6NVM2X3F4eWlaU1huaVFySE5aaWV5V05oQjNtUXVkV2tfcnlFOHZrczV4Wm4wST18qbo4Axp6mqz-_F40kAFQhRj-nrAaEuB2M1R-QBWL1D4='
    
}})).json();
var data = tojoin.data;
console.log(tojoin)
if(tojoin.success){
    varables["databaseURL"] = tojoin.fbShardURL;
    var app = initializeApp(varables);
var it = getAuth(app);
setPersistence(it,inMemoryPersistence);
await signInWithCustomToken(it,tojoin.fbToken);
var dref = ref(getDatabase(app),a.toString());
console.log("refed")
onValue(dref,function(snapshot){
    console.log(snapshot.val(),"fv");
});

}else{
    console.log(`fail:${JSON.stringify(tojoin)}`)
}
  })
