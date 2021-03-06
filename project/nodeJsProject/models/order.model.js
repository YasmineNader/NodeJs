const mongoose = require("mongoose")
const User = require('../models/user.model')
const product = require("../models/product.model");

const orderSchema = new mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    
 
    //  products_id:[{

    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'products',
    //     required:true
    //   }]


       products:[{
        _id:{type:mongoose.Schema.Types.ObjectId},
        quantity:{type:String},
        name:{type:String},
        color:{type:String}
    }],
    orderStatus:{type:String}


},{ timestamps: true })



const order= new mongoose.model('orders',orderSchema)

module.exports=order