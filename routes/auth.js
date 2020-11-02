const express = require('express'),
      router = express.Router(),
      bcrypt = require('bcryptjs'),
      config = require('config'),
      jwt = require('jsonwebtoken'),  
      auth = require('../middleware/auth'),
      //User Model
      User = require('../models/user')


            // get req api/auth/user

router.get('/user', auth, (req, res) =>{
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user)) 
    
})


router.post('/loginUser', (req, res)=>{
    const { name, password} = req.body;
     
    // simple validation
    if( !name || !password){
        return res.status(400).json({msg: 'please enter all fields'})
    }
     
    //check for existing user
      User.findOne({name})
      .then(user => {
          if (!user)
              return res.status(400)
              .json({msg: "User doesn't exists"});
            
              //validate password
              bcrypt.compare(password, user.password)
              .then(isMatch => {
                  if(!isMatch) return res.status(400).json({msg: 'invalid password'})
   
                  jwt.sign(
                   {id: user.id},
                   config.get('jwtSecret'),
                   {expiresIn: 3600},
                   (err, token) =>{
                      if (err)  throw err;
   
                      res.json({
                          token,
                       user:{
                           id: user.id,
                           name: user.name,
                           admin: user.admin
                       }
                   })
                   }
               )
   
              })
          
      })
   
    
   })
   
   
      
   
   
   
   
   
   module.exports = router;      