const mongoose=require('mongoose');
const initdata=require('./data');
const listing=require('../Models/listing');


const mongooseurl='mongodb://127.0.0.1:27017/Nest';
main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(mongooseurl);
}


const init=async ()=>{
    await listing.deleteMany({});
    initdata.data=initdata.data.map((obj) =>({
        ...obj, 
        owner: "681b7cca3bb71d4eae4774c6"
    }));
    await listing.insertMany(initdata.data);
    console.log("data was successfully intialized");
}
init();