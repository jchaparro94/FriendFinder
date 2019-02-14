const friends = require("../data/friends");

module.exports = function(app) {
  app.get("/data/friends", function(req, res) {
    res.json(friends);
  });

  app.post('/data/friends', function(req, res) {
    console.log(req.body.scores);

    //This should receive the users input from survey
    let user = req.body;

    //parseInt scores
    for (let i = o; i < user.scores.length; i++){
        user.scores[i] = parseInt(user.scores[i]);
    }

    let bfIndex = 0;
    let minDifference = 50;

    for (let i = 0; i < friends.length; i++) {
        let totalDiff = 0;
        for (let j = 0; j < friends[i].scores.length; j++) {
            let difference = Math.abs(user.scores[j] - friends[i].scores[j]);
            totalDiff += difference;
        }

        //changes the bf results if there is a new found minimum
        if (totalDiff < miniDifference) {
            bfIndex = i;
            minDifference = totalDiff;
        }
    }

    friends.push(user);

    res.json(friends[bfIndex]);


  });
};