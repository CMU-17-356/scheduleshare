const fs =require('fs');
const path = require('path');
const Friend = require('../schema/friend_schema');
const Schedule = require('../schema/schedule_schema');
const User = require('../schema/user_schema');

const data=fs.readFileSync(path.join(__dirname, "../../out.json"), 'utf8');
const words=JSON.parse(data);
const courses = words['courses'];
console.log(courses['11-111'] == undefined);

const view_course_by_id = (req, res) => {
    console.log(req.params._id);
    if (courses[req.params._id] == undefined ) {
        res.status(400).send("Course not Found");
    }
    else {
        res.status(200).send(courses[req.params._id])
    }
};



module.exports = {
    view_course_by_id,
};
