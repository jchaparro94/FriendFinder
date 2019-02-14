const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {



    // Routes
    // ===========================================================
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, `../public/home.html`));
    });
    
    app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, `../public/survey.html`));
    })

    app.get('/data/friends', function(req, res) {
    return res.json(friendsArray);
    });
};