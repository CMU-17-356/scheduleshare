const express = require('express');
const fs =require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userControllers = require('../controllers/user_controllers');
const scheduleControllers = require('../controllers/schedule_controllers');
const friendControllers = require('../controllers/friend_controllers');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const data=fs.readFileSync('../../out.json', 'utf8');
const words=JSON.parse(data);
const courses = words['courses'];
console.log(courses['15-122']);


app.listen(port, () => {
    console.log(`Server listening on localhost:${port}/`);
});


// User End Points
app.get('/user/', userControllers.view_all_users,
);

app.get('/user/:_id', userControllers.view_user_by_id,
);

app.post('/user/', userControllers.add_user,
);

app.put('/user/:_id', userControllers.update_user_by_id,
);

app.delete('/user/:_id', userControllers.delete_user_by_id,
);

// schedule End Points
app.get('/schedule/', scheduleControllers.view_all_schedules,
);

app.get('/schedule/:_id', scheduleControllers.view_schedule_by_id,
);

app.post('/schedule/', scheduleControllers.add_schedule,
);

app.put('/schedule/:_id', scheduleControllers.update_schedule_by_id,
);

app.delete('/schedule/:_id', scheduleControllers.delete_schedule_by_id,
);

// Friend End Points
app.get('/friend/', friendControllers.view_all_friends,
);

app.get('/friend/:_id', friendControllers.view_friend_by_id,
);

app.post('/friend/', friendControllers.add_friend,
);

app.put('/friend/:_id', friendControllers.update_friend_by_id,
);

app.delete('/friend/:_id', friendControllers.delete_friend_by_id,
);


main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}
