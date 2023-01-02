import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
        maxlength: 60,
    },

    desc:{
        type: String,
        required:true,
        maxlength: 200,
    },


    img:{
        type: String,
        required:true,
    },

    prices:{
        type:[Number],
        required: true,

    },

    extraOptions:{
      
        type:[
            {text:{type: String, required: true},
              price: {type: Number, required: true}}]
    },

  
},

{timestamps: true}
)

// module.exports = new mongoose.model("Product", ProductSchema)
export default mongoose.models.Product || ("Product", ProductSchema)