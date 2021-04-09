var express = require('express');
var router = express.Router();
const userConteollter = require('../core/business/user-controller')

/* GET home page. */
router.post('/add-employee', function (req, res, next) {
  // let employ = req.body;
  // userConteollter.addEmployee(employ, (response) => {
  //   res.send(response)
  // })
  userConteollter.getSalary( (response) => {
       res.send(response)
    })

});

module.exports = router;
