const express= require('express');
const routes = express.Routes();
const userController = require('../controllers/usercontrollers.js');


Router.get('/users',(req,res)=>{
    userController.getUsers(req,res);

})
routes.get('/users/:id',(req,res)=>{
    userController.getparticularUser(req,res)
})


module.exports = router;
