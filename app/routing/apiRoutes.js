var friendList = require('../data/friends.js');

module.exports = function (app) {
    
    app.get('/api/friendlist', function (req, res) {
        res.json(friendList);
    });

    app.post('/api/friendlist', function (req, res) {
        
        var bestMatch = {
            name: "",
            photo: "",
            compatibility: 1000
        };

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference = 0;

        for (var i = 0; i < friendList.length; i++) {
            totalDifference = 0;

            for (var s = 0; s < friendList[i].scores[s]; s++) {
                totalDifference += Math.abs(parseInt(userScores[s]) - parseInt(friendList[i].scores[s]));
                if (totalDifference <= bestMatch.compatibility) {
                    bestMatch.name = friendList[i].name;
                    bestMatch.photo = friendList[i].photo;
                    bestMatch.compatibility = totalDifference;
                }
            }
        }

        friendList.push(userData);
        res.json(bestMatch);

    });

}