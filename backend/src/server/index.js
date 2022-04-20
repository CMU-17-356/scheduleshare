const express = require('express');
const fs =require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const user_controllers = require("../controllers/user_controllers");
const schedule_controllers = require("../controllers/schedule_controllers");
const friend_controllers = require("../controllers/friend_controllers");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const data=fs.readFileSync('../../out.json', 'utf8');
const words=JSON.parse(data);
const courses = words['courses']
console.log(courses['15-122']);


app.listen(port, () => {
    console.log(`Server listening on localhost:${port}/`);
});


// User End Points
app.get('/user/', user_controllers.view_all_users
);

app.get('/user/:_id', user_controllers.view_user_by_id
);

app.post('/user/', user_controllers.add_user
);

app.put('/user/:_id', user_controllers.update_user_by_id
);

app.delete('/user/:_id', user_controllers.delete_user_by_id
);

// schedule End Points
app.get('/schedule/', schedule_controllers.view_all_schedules
);

app.get('/schedule/:_id', schedule_controllers.view_schedule_by_id
);

app.post('/schedule/', schedule_controllers.add_schedule
);

app.put('/schedule/:_id', schedule_controllers.update_schedule_by_id
);

app.delete('/schedule/:_id', schedule_controllers.delete_schedule_by_id
);

// Friend End Points
app.get('/friend/', friend_controllers.view_all_friends
);

app.get('/friend/:_id', friend_controllers.view_friend_by_id
);

app.post('/friend/', friend_controllers.add_friend
);

app.put('/friend/:_id', friend_controllers.update_friend_by_id
);

app.delete('/friend/:_id', friend_controllers.delete_friend_by_id
);


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}