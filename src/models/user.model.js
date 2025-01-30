/*id string 
username string pk
email string
fullname string
avatar string
coverimage string 
watchstory objectid[]video
password string
refreshtocken string
creatrAT Date
updateat date
*/

import mongoose,{Schema} from 'mongoose';


const userschema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true, 
        trim: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true, 
        trim: true
        // index: true
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type:string,//coloudinary url
        required: true,

    },
    coverimage:{
        type: String,
        // required: true,
    },
    watchhistory:[
        {
        type: Schema.Types.ObjectId,
        ref: "Video",
    }
],
    password:{
        type: String,
        required: [true, "Password is required"],
    },
    refreshtocken:{
        type: String,
    }
},
    {timestamps: true}, //our doc automatically get createdat and updateat
)

export const user = mongoose.model("User", userschema);