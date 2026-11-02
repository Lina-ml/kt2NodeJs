import mongoose from "mongoose";

const PerfumeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true , "Название обязательно!"], 
        trim: true
    },
    fragrance:{
        type:String,
        required:[true, "Название обязательно!"],
        trim: true
    },
    price:{
        type: Number,
        required: [true , "Цена обязательна!"],
        min: 0
    },
    Volume:{
        type: Number,
        required: [true , "Цена обязательна!"],
        min: 0
    },
    brand:{
        type:String,
        required:[true, "Название обязательно!"],
        trim: true
    },
    Longevity:{
        type:String,
        required:[true, "Название обязательно!"],
        trim: true
    },
    image: {
        type: String
    }
})
export default mongoose.model("Perfume",PerfumeSchema)