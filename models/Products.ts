import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        type: String
    },
    productId:{
        type: Number
    },
    productType:{
        type: String
    },
    productPrice:{
        type: Number
    }
})

const Product = mongoose.models.products || mongoose.model("products",productSchema);
export default Product