const User = require('../schema/user_schema');
const {startDatabase} = require('../db/mongo');
const mongoose = require('mongoose');

const view_all_users = (req, res) => {
    const client = startDatabase();
    client.connect(function(err, client){
        const collection = client.db("ScheduleShare").collection('User');
        collection.find({}).toArray(function(err, result) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });
};

const view_user_by_id = (req, res) => {
    const client = startDatabase();
    client.connect(function(err, client){
        const collection = client.db("ScheduleShare").collection('User');
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

const add_user = (req, res) => {
    const client = startDatabase();
    client.connect(function(err, client){
        const collection = client.db("ScheduleShare").collection('User');
        const user = new User(req.body)
        try {
            user.validate();
            collection.insertOne(user, function(){
                client.close();
            });
            res.status(200).send(user._id);
        } catch(error) {
            console.log(error);
            res.status(400).send(error);       
        }
    });
};

const update_user_by_id = (req, res) => {
    const client = startDatabase();
    client.connect(async function(err, client) {
        const collection = client.db("ScheduleShare").collection('User');
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

const delete_user_by_id = (req, res) => {
    const client = startDatabase();
    client.connect(async function(err, client) {
        const collection = client.db("ScheduleShare").collection('User');
        const _id = mongoose.Types.ObjectId(req.params._id);
        collection.deleteOne({_id: _id}, {$set: req.body}, function (err, result) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send('Successfully Deleted User');
            }
            client.close();
        })
    })
};


module.exports = {
    view_all_users,
    view_user_by_id,
    add_user,
    update_user_by_id,
    delete_user_by_id
};
