const express = require('express');
const config = require('./config');
const logger = require('./log/logger');
const employeeRoutes = require('./routes/employee');
const morgan = require('morgan');
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


if(app.get('env') === 'development'){
  morgan.token('id', function getId (req) {
    return req.id
  })
  app.use(morgan(':id :method :url :response-time'));
}

app.use('/api/employee',employeeRoutes);

app.listen(config.PORT , (err)=>{
    if (err) console.log(err);
    console.log('Server Start '+  config.PORT);
   
    logger.log({
        level: 'info',
        message: 'Server Start '+  config.PORT
      });
});