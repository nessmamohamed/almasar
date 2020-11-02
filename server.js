const express = require('express'),
      app = express(),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose')


       // Allow Access
       app.use(function (req, res, next) {

      

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      
        // Request headers you wish to allow
 
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
        
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
      
        // Pass to next layer of middleware
        next();
      });


      app.use(bodyParser.json())

      app.use('/', require('./routes/quest'))
      app.use('/', require('./routes/quser'))
      app.use('/', require('./routes/results'))
      app.use('/' , require('./routes/user'))
      app.use('/' , require('./routes/auth'))

       //mongoose url 
       const url = 'mongodb+srv://nesso:111222333Nn@nmcluster.tb0vp.mongodb.net/elmasar?retryWrites=true&w=majority'

       //connect mongoose
       mongoose.connect(url, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useUnifiedTopology: true 
      }).then (() => console.log('mongoose connected ...'))
       .catch(err => console.log(err))


     

       
      if(process.env.NODE_ENV === 'production'){
        //set static folder
        app.use(express.static('client/build'))

        app.get('*', (req, res)=>{
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        })

        
        
      }
     
       

       //PORT 

       app.listen(process.env.PORT || 5000 , () => {
        console.log('server has started ...' )
       })