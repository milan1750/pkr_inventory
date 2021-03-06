// const mongoose = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    modelNames: String,
    modelShortName: String,
    status: Boolean,
    createdDate: Date,
    updatedDate: Date,
    createdBy: String,
    updatedBy: String,
    isUpdated: Boolean,
});

module.exports = mongoose.model('modelType',userSchema,'modelTypes');