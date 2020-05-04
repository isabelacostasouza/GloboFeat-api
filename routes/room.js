var express = require('express');
var router = express.Router();

module.exports = function (io) {

    var socket_io = require('../sockets/io');
    socket_io.init(io); // Initialize socket.io

    router.get('/:id/:user/:videoid', function (req, res) {
        return res.render('room', {
            room: req.params.id,
            videourl: req.params.videoid,
            user: req.params.user
        });
    });

    return router;
};

