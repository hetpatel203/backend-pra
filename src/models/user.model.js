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
import bcrypt from 'bcrypt'; //bcrypt is used to hash the password

const userschema = new Schema({ //schema is a class//schema is a blueprint of the document
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

userSchema.pre("save", async function (next) {

    if(!this.isModified("password") ) return next();    //if password is not modified then return next
    {
    this.password = await bcrypt.hash(this.password, 10);  //this.password is the password that we are getting from the user //10 is the number of rounds of salt//hashing is async so we use await //
    }
})
userSchema,methods.ispasswordcorrect = async function (password) {
    return await bcrypt.compare(password, this.password); //this.password is the password that we are getting from the user
}

userSchema.methods.generateaccesstoken = function (){
    //short lived access token
    jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
)
}
userSchema.methods.generateRfreshtoken = function (){
    //short lived access token
    jwt.sign({
        _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
)
}
export const user = mongoose.model("User", userschema);//model name is User and schema is userschema