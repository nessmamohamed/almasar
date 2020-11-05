const express = require('express'),
      router = express.Router(),
      Quser = require('../models/quser')



      router.post('/quser', (req, res) => {
          const phone = req.body.quser.phone,
                titles = req.body.quser.titles

                

                Quser.findOne({phone})
                .then(quser => {
                    if(quser) {
                        console.log(quser.phone)
                        if(quser.titles.indexOf(titles) !== -1){
                            return res.status(400).json({msg: 'you have already signed for this questionnaire before'})
                        }else{

                            Quesr.findById(quser.id)
                            .then(qusers => {
                                titles = [...quser.titles, ...titles]
                            qusers.save()
                            res.json({msg: 'user accepted'})
                            })
                           
                        }
                    }else {
                        const newquser = new Quser({
                            phone,
                            titles
                        })

                        newquser.save()
                        .then(user => res.json({msg : 'user created'}))
                    }
                })
               
      })


     

      module.exports = router