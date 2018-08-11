var friendList = require('../data/friends.js');

module.exports = function (app) {
    
    app.get('/api/friendlist', function (req, res) {
        res.json(friendList);
    });

}