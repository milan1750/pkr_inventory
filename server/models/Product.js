// const mongoose = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    symbol: String,
    category: String,
    group: String,
    productName: String,
    model: String,
    productDescription: String,
    productCostPrice: String,
    hasAttributes: String,
    hasInstances: String,
    packSize: String,
    averageCost: String,
    singleUnitProductCode: String,
    measurementUnit: String,
    dimensionGroup: String,
    warrentyTerms: String,
    status: Boolean,
    createdDate: Date,
    upDatedDate: Date,
    createdBy: String,
    upDatedBy: String,
    isUpDated: Boolean,
});

module.exports = mongoose.model('product',userSchema,'products');