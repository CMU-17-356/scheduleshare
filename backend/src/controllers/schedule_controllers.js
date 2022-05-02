const Schedule = require('../schema/schedule_schema');

const view_all_schedules = (req, res) => {
    const client = startDatabase();
    client.connect(function(err, client){
        const collection = client.db("ScheduleShare").collection('Schedule');
        collection.find({}).toArray(function(err, result) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });
};

const view_schedule_by_id = (req, res) => {
    const client = startDatabase();
    client.connect(function(err, client){
        const collection = client.db("ScheduleShare").collection('Schedule');
        const _id = mongoose.Types.ObjectId(req.params._id);
        collection.find({_id: _id}).toArray(function(err, result) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });
};


const add_schedule = (req, res) => {
    const client = startDatabase();
    client.connect(function(err, client){
        const collection = client.db("ScheduleShare").collection('Schedule');
        const schedule = new Schedule(req.body)
        try {
            schedule.validate();
            collection.insertOne(schedule, function(){
                client.close();
            });
            res.status(200).send(schedule._id);
        } catch(error) {
            console.log(error);
            res.status(400).send(error);       
        }
    });
};

const update_schedule_by_id = (req, res) => {
    const client = startDatabase();
    client.connect(async function(err, client) {
        const collection = client.db("ScheduleShare").collection('Schedule');
        const _id = mongoose.Types.ObjectId(req.params._id);
        collection.updateOne({_id: _id}, {$set: req.body}, function (err, result) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send('Successfully Updated User');
            }
            client.close();
        })
    })
};

const delete_schedule_by_id = (req, res) => {
    const schedule = Schedule.deleteOne({_id: req.params._id}, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send('Successfully Deleted Schedule');
        }
    });
};

const get_users_by_course_id = (req, res) => {
  const schedule = Schedule.find({courses: req.params._id}, (err, result) => {
      if (err) {
          res.status(400).send(err);
      } else {
          
          let schedule_list = result.map((r) => r.toObject());
          console.log(schedule_list);
          let result_list = [];
          for (let i = 0; i < schedule_list.length; i++) {
            let schedule = schedule_list[i];
            console.log(schedule);
            result_list.push(schedule.user_id);
          }
          res.status(200).send(result_list);
      }
  });
};



module.exports = {
    view_all_schedules,
    view_schedule_by_id,
    add_schedule,
    update_schedule_by_id,
    delete_schedule_by_id,
    get_users_by_course_id
};
