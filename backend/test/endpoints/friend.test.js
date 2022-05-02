const {app} = require('../../src/server/index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
const User = require('../../src/schema/user_schema');
const Friend = require('../../src/schema/friend_schema');

chai.use(chaiHttp);

describe('Friends (unparameterized)', function() {
    it('should get all courses from index route', function(done) {
        const getRequest = chai.request(app).get('/friend');
        getRequest.end((err, res) => {
            assert(res.statusCode==200);
            done();
        })
    });

    it('should POST a new friend from add_friend route', function(done) {
        const data = 
        {
         
        }
        const postRequest = chai.request(app).post('/friend').send(data);
        postRequest.end((err, res) => {
            assert(res.statusCode == 200);
            done();
        });
    });
})

describe('Friends (parameterized)', function() {
    //TODO post a friend 
    before(function(done) {
        user1 = new User({username:"a", password:"alsoa", full_name:"a a"});
        user2 = new User({username:"b", password:"alsob", full_name:"b b"});
        if (user1.validate() && user2.validate()) {
            friend = new Friend({friend_1:user1._id, friend_2: user2._id});
            if(friend.validate()) {
                done();
            } else {
                throw new TypeError("Friend did not validate");
            }
        } else {
            throw new TypeError("Users did not validate");
        }
    })

    it('should GET a friend by their id', function(done) {
        const getRequest = chai.request(app).get(`/friend/${user1._id}`);
        getRequest.end((err, res) => {
            assert(res.statusCode==200);
        done();
        })
    })

    // it('should DELETE a friend by their id', function(done) {
    //     const deleteRequest = chai.request(app).delete(`/friend/${user1._id}`);
    //     deleteRequest.end((err, res) => {
    //         assert(res.statusCode==200);
    //     done();
    //     })
    // })

    //TODO add param to update
    it('should PUT revisions for a friend by their id', function(done) {
        const putRequest = chai.request(app).put(`/friend/${user1._id}`);
        putRequest.end((err, res) => {
            assert(res.statusCode==200);
        done();
        })
    })
})