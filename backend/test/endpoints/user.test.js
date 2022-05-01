const {app} = require('../../src/server/index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
const User = require('../../src/schema/user_schema');

chai.use(chaiHttp);

describe('Users (unparameterized)', function() {
    it('should get all users from index route', function(done) {
        const getRequest = chai.request(app).get('/user');
        getRequest.end((err, res) => {
            assert(res.statusCode==200);
            done();
        })
    });

    it('should POST a new user from add_user route', function(done) {
        const data = 
        {
            'username':'mhilton',
            'password':'IloveSE',
            'full_name':'Michael Hilton'
        }
        const postRequest = chai.request(app).post('/user').send(data);
        postRequest.end((err, res) => {
            console.log(err);
            assert(res.statusCode == 200);
            done();
        });
    });
})

describe('Users (parameterized)', function() {
    before(function(done) {
        data = { 
            'username':'a', 
            'password':'alsoa', 
            'full_name':'a a'
        };
        let user_id = "";
        const postRequest = chai.request(app).post('/user').send(data);
        postRequest.end((err, res) => {
            console.log(err);
            assert(res.statusCode == 200);
            user_id = res.body
            done();
        });
    })

    // it('should GET a user by their id', function(done) {
    //     const getRequest = chai.request(app).get(`/user/${user_id}`);
    //     getRequest.end((err, res) => {
    //         assert(res.statusCode==200);
    //     done();
    //     })
    // })

    // it('should DELETE a user by their id', function(done) {
    //     const deleteRequest = chai.request(app).delete(`/user/${user_id}`);
    //     deleteRequest.end((err, res) => {
    //         assert(res.statusCode==200);
    //     done();
    //     })
    // })

    // //TODO add param to update
    // it('should PUT revisions for a user by their id', function(done) {
    //     const putRequest = chai.request(app).put(`/user/${user_id}`);
    //     putRequest.end((err, res) => {
    //         assert(res.statusCode==200);
    //     done();
    //     })
    // })
})