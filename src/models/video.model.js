/*
owner object iduser
cvideofile string
thumbnail string
title string
description string
duration number
views number
is published boolean 
createdat date
updateat date
*/

import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema({
    videofile:{
        type:string,
        required: true,
    },
    thumbnail:{ //cloudinary url
        type:string,
        required: true,
    },
    title:{ //
        type:string,
        required: true,
    },
    description:{
        type:string,
        required: true,
    },
    duration:{
        type:number,
        required: true,
    },
    views:{
        type:number,
        default: 0,
    },
    ispublished:{
        type:boolean,
        default: false,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    } 
},{timestamps: true})

export const video = mongoose.model("User", videoschema);
