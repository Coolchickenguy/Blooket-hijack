const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports = class blooket{
    id;
    name;
    joined;
    isPlus;
    isRandomNames;
    constructor(){};
    async join(id,name){
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