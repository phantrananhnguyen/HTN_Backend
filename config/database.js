const mongoose  = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true)

const atlat ='mongodb+srv://lamthienphat0810:ZVr6UWZ8mVeebdH2@cluster0.8srv7.mongodb.net/Garage?retryWrites=true&w=majority&appName=Cluster0';
const connect = async () => {
    try {
        await mongoose.connect(atlat, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected success");
    } catch (error) {
        console.log("Connected fail")
        console.log(error);
    }
}
module.exports = { connect }