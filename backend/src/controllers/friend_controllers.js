const Friend = require('../schema/friend_schema');
const {startDatabase} = require('../db/mongo');
const mongoose = require('mongoose');


const view_all_friends = (req, res) => {
    const client = startDatabase();
    client.connect(function(err, client){
        const collection = client.db("ScheduleShare").collection('Friend');
        collection.find({}).toArray(function(err, result) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    });
};

const view_friend_by_id = (req, res) => {
    const client = startDatabase();
    client.connect(function(err, client){
        const collection = client.db("ScheduleShare").collection('Friend');
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


const add_friend = (req, res) => {
    const client = startDatabase();
    client.connect(function(err, client){
        const collection = client.db("ScheduleShare").collection('Friend');
        const friend = new Friend(req.body)
        try {
            friend.validate();
            collection.insertOne(friend, function(){
                client.close();
            });
            res.status(200).send(friend._id);
        } catch(error) {
            console.log(error);
            res.status(400).send(error);       
        }
    });
};

const update_friend_by_id = (req, res) => {
    const client = startDatabase();
    client.connect(async function(err, client) {
        const collection = client.db("ScheduleShare").collection('Friend');
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

const delete_friend_by_id = (req, res) => {
    const friend = Friend.deleteOne({_id: req.params._id}, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send('Successfully Deleted Friend');
        }
    });
};


module.exports = {
    view_all_friends,
    view_friend_by_id,
    add_friend,
    update_friend_by_id,
    delete_friend_by_id
};
