var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Detroitium' });
});
router.get('/mailingList',function(req,res){
    res.render('mailingList', { title: 'Detroitium MailingList'});
});

module.exports = router;
