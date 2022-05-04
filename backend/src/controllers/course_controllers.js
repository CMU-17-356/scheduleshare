const fs =require('fs');
const path = require('path');

const data=fs.readFileSync(path.join(__dirname, '../../out.json'), 'utf8');
const words=JSON.parse(data);
const courses = words['courses'];

const view_course_by_id = (req, res) => {
  console.log(req.params._id);
  if (courses[req.params._id] == undefined ) {
    res.status(400).send('Course not Found');
  } else {
    res.status(200).send(courses[req.params._id]);
  }
};

const get_first_x_courses = (req, res) => {
  const result_list = [];
  let initial_course_first_half = 10;
  let initial_course_second_half = 100;
  while (result_list.length < parseInt(req.params._id)) {
    const new_course_id = initial_course_first_half.toString() + '-' +
                              initial_course_second_half.toString();
    console.log(new_course_id);
    if (courses[new_course_id] != undefined) {
      courses[new_course_id].course_id = new_course_id;
      result_list.push(courses[new_course_id]);
    }
    if (initial_course_second_half < 1000) {
      initial_course_second_half += 1;
    } else {
      initial_course_second_half = 100;
      initial_course_first_half += 1;
    }
    if (initial_course_first_half > 99 ||
            result_list.length > parseInt(req.params._id)) {
      break;
    }
  }
  res.status(200).send(result_list);
};

module.exports = {
  view_course_by_id,
  get_first_x_courses,
};
