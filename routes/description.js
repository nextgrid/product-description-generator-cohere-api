const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on things.');
});

//export this router to use in our index.js
module.exports = router;