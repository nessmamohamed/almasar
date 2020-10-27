const express = require('express'),
      router = express.Router(),
      Quest = require('../models/quest')



      router.post('/quest', (req, res) => {
         

   
          const newQuest = new Quest({
              questions: req.body.quest,
              title: req.body.title,
              title_ar: req.body.title_ar
          })

          
          console.log(newQuest)
            
          newQuest.save()
          .then(quest => res.json(quest) )
        .catch(err => { console.log(err)
          res.status(400).json({msg: 'quest post failed'})})
      })


      router.get('/quest', (req, res) => {
        Quest.find({})
        .then(quest => res.json(quest))
      })

      router.get('/quest/:id', (req, res) => {
        Quest.findById(req.params.id)
        .then(quest => res.json(quest))
      })

      router.delete('/quest/:id' , (req, res) => {

        Quest.findById(req.params.id)
        .then(quest => {
            quest.remove()
            
        })
      })






      module.exports = router