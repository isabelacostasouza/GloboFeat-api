var express = require('express');
var router = express.Router();

var socket_io = require('../sockets/io');

router.get('/', function (req, res) {
    return res.json({
        rooms: socket_io.getPublicRooms()
    });
});

module.exports = router;