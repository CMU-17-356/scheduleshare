const Friend = require('../schema/friend_schema');
const {startDatabase} = require('../db/mongo');
const mongoose = require('mongoose');


const view_all_friends = (req, res) => {
  const client = startDatabase();
  client.connect(function(err, client) {
    const collection = client.db('ScheduleShare').collection('Friend');
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
  client.connect(function(err, client) {
    const collection = client.db('ScheduleShare').collection('Friend');
    const _id = new mongoose.Types.ObjectId(req.params._id);
    collection.find({_id: _id}).toArray(function(err, result) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  });
};

const view_friends_by_user_id = (req, res) => {
  const client = startDatabase();
  client.connect(async function(err, client) {
    const collection = client.db('ScheduleShare').collection('Friend');
    const _id = new mongoose.Types.ObjectId(req.params._id);
    collection.find({$or: [{friend_1: _id}, {friend_2: _id}]})
        .toArray(function(err, result) {
          if (err) {
            res.status(400).send(err);
          } else {
            const friend_list = result;
            console.log(friend_list);
            const result_list = [];
            for (let i = 0; i < friend_list.length; i++) {
              const friend = friend_list[i];
              console.log(friend);
              if (friend.friend_2 != req.params._id) {
                result_list.push(friend.friend_2);
              }
            }
            res.status(200).send(result_list);
          }
          client.close();
        });
  });
};


const add_friend = (req, res) => {
  const client = startDatabase();
  client.connect(function(err, client) {
    const collection = client.db('ScheduleShare').collection('Friend');
    const friend = new Friend(req.body);
    try {
      friend.validate();
      collection.insertOne(friend, function() {
        client.close();
      });
      res.status(200).send(friend._id);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });
};

const update_friend_by_id = (req, res) => {
  const client = startDatabase();
  client.connect(async function(err, client) {
    const collection = client.db('ScheduleShare').collection('Friend');
    const _id = new mongoose.Types.ObjectId(req.params._id);
    collection.updateOne({_id: _id}, {$set: req.body}, function(err, result) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send('Successfully Updated User');
      }
      client.close();
    });
  });
};

const delete_friend_by_id = (req, res) => {
  const client = startDatabase();
  client.connect(async function(err, client) {
    const collection = client.db('ScheduleShare').collection('Friend');
    const _id = new mongoose.Types.ObjectId(req.params._id);
    collection.deleteOne({_id: _id}, function(err, result) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send('Successfully Updated User');
      }
      client.close();
    });
  });
};

module.exports = {
  view_all_friends,
  view_friend_by_id,
  add_friend,
  update_friend_by_id,
  delete_friend_by_id,
  view_friends_by_user_id,
};
