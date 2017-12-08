const express = require('express');
const router = express.Router();


const user = require('../../models/intechuser');

router.get('/list', (req,res,next) =>{
	user.find((err,user) =>{
		if(err){
			return res.send(err);
		}
			return res.json(user);
	});
	
});

module.exports = router;
