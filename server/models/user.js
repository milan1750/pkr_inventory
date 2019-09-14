const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:String,
    password: String,
    companyName: String,
    companyType: String,
    companyLocation: String,
    companyContact: String,
    CompanyEmail: String,
    companyWebsite: String,
    companyRegNumber: String,
    companyPanNumber: String,
    companyEstd: String,
    companyFocalPersonName: String,
    companyFocalPersonLocation: String,
    companyFocalPersonContact: String,
    companyFocalPersonEmail: String,
    status: Boolean,
    createdDate: Date,
    updatedDate: Date,
    createdBy: String,
    updatedBy: String,
    isUpdated: Boolean,

});

module.exports = mongoose.model('user',userSchema,'users');