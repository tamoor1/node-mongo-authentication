const express = require('express');
const chatRoom = require('../controllers/chatRoom');
// const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/chatroom', chatRoom.chatRoom);

module.exports = router;
