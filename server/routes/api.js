const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const qType = require('../models/QuantityType');
const cType = require('../models/CategoryType');
const mType = require('../models/ModelType');
const gType = require('../models/GroupType');
const product = require('../models/Product');
const jwt = require('jsonwebtoken')
const db = "mongodb://127.0.0.1:27017/inventory_2019";
// mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
})

router.post('/register', verifyToken, (req, res) => {
  let userData = req.body;
  let user = new User(userData)
  user.status = false;
  user.createdDate = new Date();
  user.createdBy = req.userId;
  user.isUpdated = false;
  user.updatedBy = null;
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      successJson.data.message = 'User registered successfully';
      successJson.data.requestSuccess = true;
      res.status(200).json(successJson);
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})

router.get('/users', verifyToken,(req, res) => {
  User.find({}, (err, users) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.status(200).send({data: users});
    }
  });
});

router.get('/users/:id', verifyToken,(req, res) => {
  User.findOne({'_id':req.params.id}, (err, user) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.status(200).send({data: user});
    }
  });
});

router.post('/quantity-type/savetype',verifyToken,(req,res) => {
  requestData = req.body;
  let qType1 = new qType(requestData);
  qType.status = false;
  qType.createdDate = new Date();
  qType.createdBy = req.userId;
  qType.isUpdated = false;
  qType1.save((err, data) => {
    if (err) {
      console.log(err)      
    } else {
      successJson.data.message = 'Quantity Type Saved Successfully';
      successJson.data.requestSuccess = true;
      res.status(200).json(successJson);
    }
  })
});

router.post('/category-type/savetype',verifyToken,(req,res) => {
  requestData = req.body;
  let cType1 = new cType(requestData);
  cType.status = false;
  cType.createdDate = new Date();
  cType.createdBy = req.userId;
  cType.isUpdated = false;
  cType1.save((err, data) => {
    if (err) {
      console.log(err)      
    } else {
      successJson.data.message = 'Quantity Type Saved Successfully';
      successJson.data.requestSuccess = true;
      res.status(200).json(successJson);
    }
  })
});

router.post('/group-type/savetype',verifyToken,(req,res) => {
  requestData = req.body;
  let gType1 = new gType(requestData);
  gType.status = false;
  gType.createdDate = new Date();
  gType.createdBy = req.userId;
  gType.isUpdated = false;
  gType1.save((err, data) => {
    if (err) {
      console.log(err)      
    } else {
      successJson.data.message = 'Group Type Saved Successfully';
      successJson.data.requestSuccess = true;
      res.status(200).json(successJson);
    }
  })
});

router.post('/model-type/savetype',verifyToken,(req,res) => {
  requestData = req.body;
  let mType1 = new mType(requestData);
  mType.status = false;
  mType.createdDate = new Date();
  mType.createdBy = req.userId;
  mType.isUpdated = false;
  mType1.save((err, data) => {
    if (err) {
      console.log(err)      
    } else {
      successJson.data.message = 'Model Type Saved Successfully';
      successJson.data.requestSuccess = true;
      res.status(200).json(successJson);
    }
  })
});


router.post('/product/save',verifyToken,(req,res) => {
  requestData = req.body;
  let product1 = new product(requestData);
  product.status = false;
  product.createdDate = new Date();
  product.createdBy = req.userId;
  product.isUpdated = false;
  product1.save((err, data) => {
    if (err) {
      console.log(err)      
    } else {
      successJson.data.message = 'Product Saved Successfully';
      successJson.data.requestSuccess = true;
      res.status(200).json(successJson);
    }
  })
});


router.get('/quantity-type/gettype', verifyToken,(req, res) => {
  qType.find({}, (err, qTypes) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.status(200).send({data: qTypes});
    }
  });
});

router.get('/category-type/gettype', verifyToken,(req, res) => {
  cType.find({}, (err, qTypes) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.status(200).send({data: qTypes});
    }
  });
});

router.get('/model-type/gettype', verifyToken,(req, res) => {
  mType.find({}, (err, qTypes) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.status(200).send({data: qTypes});
    }
  });
});

router.get('/group-type/gettype', verifyToken,(req, res) => {
  gType.find({}, (err, qTypes) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.status(200).send({data: qTypes});
    }
  });
});


var successJson = {
  data:{
    statue:200,
    requestSuccess: false,
    message:'',
    _callback:'',
  }
}


module.exports = router;