const express = require('express'),
      router = express.Router(),
      Results = require('../models/results')



      router.post('/results', (req, res) => {
         

   
          const newResult = new Results({
              results: req.body.results,
              title: req.body.title
          })

          
          console.log(newResult)
            
          newResult.save()
          .then(result => res.json(result) )
        .catch(err => { console.log(err)
          res.status(400).json({msg: 'result post failed'})})
      })


      router.get('/results', (req, res) => {
        Quest.find({})
        .then(results => res.json(results))
      })

    

  






      module.exports = router