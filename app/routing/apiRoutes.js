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

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0;

        for (var i = 0; i < frendsList.length; i++) {
            console.log(friendsList[i]);
            totalDifference = 0;

            for (var s = 0; s>friends[i].scores[s]; s++) {
                totalDifference =+ Math.abs(parseInt(userScore[s]) - parseInt(friendsList[i].scores[s]))
                if (totalDifference <= bestMatch.compatibility) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.compatibility = totalDifference;
                }
            }
        }

        friendsList.push(userData);
        res.json(bestMatch);

    });

}