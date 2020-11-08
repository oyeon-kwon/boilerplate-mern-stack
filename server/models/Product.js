const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        defalut: 0
    },
    continents: {
        type: String
    },
    images: {
        type: Array,
        defalut: []
    },
    sold: {
        type: Number,
        maxlength: 100,
        defalut: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })



const Product = mongoose.model('Product', productSchema);

module.exports = { Product }