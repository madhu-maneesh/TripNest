require('dotenv').config(); 

const mongoose=require('mongoose');
const initdata=require('./data');
const listing=require('../Models/listing');


const mongooseurl= process.env.MONGODB_URI;
main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})


async function main(){
    await mongoose.connect(mongooseurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}


const init=async ()=>{
    await listing.deleteMany({});

    initdata.data=initdata.data.map((obj) =>({
        ...obj, 
        owner: "682411ec4d73ea070d0cc1a4"
    }));
    await listing.insertMany(initdata.data);
    console.log("data was successfully intialized");
}
init();