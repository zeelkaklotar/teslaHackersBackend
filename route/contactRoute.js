const express =  require('express');
const router = express.Router();
const contactController = require( '../controler/contactControler');

router.post('/', contactController.create);

router.get('/', contactController.getAllContacts);

module.exports = router;

