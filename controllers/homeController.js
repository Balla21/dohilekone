const profile = require("../models/userProfile.js");

exports.homePage = (req, res) => {
    const dataToView = {
        title : "Dohile Kone",
        schools : profile.schools,
        languages : profile.progLanguages,
        projects : profile.projects
    } ;

    res.render("index", dataToView);
};