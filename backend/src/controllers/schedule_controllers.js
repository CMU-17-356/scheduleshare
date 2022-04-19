const User = require('../schema/user_schema'); 

const view_all_users = (req, res) => {
    let users = User.find({}, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
};

const view_user_by_id = (req, res) => {
    let users = User.find({_id:req.params._id}, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
};


const add_user = (req, res) => {
    let user = new User(req.body).save((err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send("Successfully Added User with _id "+ result._id );
      }
    });
  };

const update_user_by_id = (req, res) => {
let user = User.updateOne({ _id: req.params._id}, req.body, (err, result) => {
    if (err) {
        res.status(400).send(err);
    } else {
        res.status(200).send("Successfully Updated User");
    }
    });
};

const delete_user_by_id = (req, res) => {
    let user = User.deleteOne({ _id: req.params._id}, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send("Successfully Deleted User");
        }
        });
    };
    


module.exports = {
    view_all_users,
    view_user_by_id,
    add_user,
    update_user_by_id,
    delete_user_by_id
}