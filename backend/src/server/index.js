const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userCon = require('../controllers/user_controllers');
const scheduleCon = require('../controllers/schedule_controllers');
const friendCon = require('../controllers/friend_controllers');
const courseCon = require('../controllers/course_controllers');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}/`);
});

// User End Points
app.get('/user/', userCon.view_all_users,
);

app.get('/user/:_id', userCon.view_user_by_id,
);

app.post('/user/', userCon.add_user,
);

app.put('/user/:_id', userCon.update_user_by_id,
);

app.delete('/user/:_id', userCon.delete_user_by_id,
);

// schedule End Points
app.get('/schedule/', scheduleCon.view_all_schedules,
);

app.get('/schedule/:_id', scheduleCon.view_schedule_by_id,
);

app.get('/schedule/course/:_id/users', scheduleCon.get_users_by_course_id,
);

app.post('/schedule/', scheduleCon.add_schedule,
);

app.put('/schedule/:_id', scheduleCon.update_schedule_by_id,
);

app.put('/schedule/:_id/course/:course_id', scheduleCon.add_course_by_id,
);

app.delete('/schedule/:_id/course/:course_id', scheduleCon.delete_course_by_id,
);


app.delete('/schedule/:_id', scheduleCon.delete_schedule_by_id,
);

// Friend End Points
app.get('/friend/', friendCon.view_all_friends,
);

app.get('/friend/:_id', friendCon.view_friend_by_id,
);

app.get('/friend/user/:_id', friendCon.view_friends_by_user_id,
);


app.post('/friend/', friendCon.add_friend,
);

app.put('/friend/:_id', friendCon.update_friend_by_id,
);

app.delete('/friend/:_id', friendCon.delete_friend_by_id,
);

app.get('/course/:_id', courseCon.view_course_by_id,
);

app.get('/course/first/:_id', courseCon.get_first_x_courses,
);

exports.app = app;
