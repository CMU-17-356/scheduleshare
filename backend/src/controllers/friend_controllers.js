const Friend = require('../schema/friend_schema');

const view_all_friends = (req, res) => {
    const friends = Friend.find({}, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};

const view_friend_by_id = (req, res) => {
    const friends = Friend.find({_id: req.params._id}, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};


const add_friend = (req, res) => {
    const friend = new Friend(req.body).save((err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send('Successfully Added Friend with _id '+ result._id );
        }
    });
};

const update_friend_by_id = (req, res) => {
    const friend = Friend.updateOne({_id: req.params._id}, req.body, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send('Successfully Updated Friend');
        }
    });
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
