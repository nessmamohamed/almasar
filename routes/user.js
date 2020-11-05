const express = require('express'),
      router = express.Router(),
      User = require('../models/user'),
      config = require('config'),
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcryptjs'),
      Visitors = require('../models/visitors')


      router.get('/visitors' , (req, res) => {
        Visitors.find({})
        .then(visitors => {
          res.json({visitors})
        })
      })

      router.post('/user', (req, res) => {
        const { name, password } = req.body;
      
        // Simple validation
        if(!name  || !password) {
          return res.status(400).json({ msg: 'Please enter all fields' });
        }
      
        // Check for existing user
        User.findOne({ name })
          .then(user => {
            if(user) return res.status(400).json({ msg: 'name already exists' });
      
            const newUser = new User({
              name,
              password,
              admin: false
            });
      
            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser.save()
                  .then(user => {
                    jwt.sign(
                      { id: user.id },
                      config.get('jwtSecret'),
                      { expiresIn: 3600 },
                      (err, token) => {
                        if(err) throw err;
                        res.json({
                          token,
                          user: {
                            id: user.id,
                            name: user.name,
                            admin: false
                          }
                        });
                      }
                    )
                  });
              })
            })
    
            const data = User.find()
            console.log(data)
          })
      });
    
    
    
    module.exports = router; 