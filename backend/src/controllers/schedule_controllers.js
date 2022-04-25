const Schedule = require('../schema/schedule_schema');

const view_all_schedules = (req, res) => {
    const schedules = Schedule.find({}, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

const view_schedule_by_id = (req, res) => {
    const schedules = Schedule.find({_id: req.params._id}, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};


const add_schedule = (req, res) => {
    const schedule = new Schedule(req.body).save((err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send('Successfully Added Schedule with _id '+ result._id );
        }
    });
};

const update_schedule_by_id = (req, res) => {
    const schedule = Schedule.updateOne({_id: req.params._id}, req.body, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send('Successfully Updated Schedule');
        }
    });
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


module.exports = {
    view_all_schedules,
    view_schedule_by_id,
    add_schedule,
    update_schedule_by_id,
    delete_schedule_by_id,
};
