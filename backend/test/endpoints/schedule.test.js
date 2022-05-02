const {app} = require('../../src/server/index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
const User = require('../../src/schema/user_schema');
const Schedule = require('../../src/schema/schedule_schema');


chai.use(chaiHttp);

describe('Schedules (unparameterized)', function() {
    it('should get all courses from index route', function(done) {
        const getRequest = chai.request(app).get('/schedule');
        getRequest.end((err, res) => {
            assert(res.statusCode==200);
            done();
        })
    });

    it('should POST a new schedule from add_user route', function(done) {
        const data = 
        {
            'username':'mhilton',
            'password':'IloveSE',
            'full_name':'Michael Hilton'
        }
        const postRequest = chai.request(app).post('/schedule').send(data);
        postRequest.end((err, res) => {
            assert(res.statusCode == 200);
            done();
        });
    });
})

describe('Schedules (parameterized)', function() {
    before(function(done) {
        user1 = new User({username:"a", password:"alsoa", full_name:"a a"});
        if (user1.validate()) {
            schedule = new Schedule({user_id: user1._id});
            if(schedule.validate()) {
                //TODO Post schedule
                done();
            }
        } else {
            throw new TypeError("User did not validate");
        }
    })

    it('should GET a schedule by their id', function(done) {
        const getRequest = chai.request(app).get(`/schedule/${schedule._id}`);
        getRequest.end((err, res) => {
            assert(res.statusCode==200);
        done();
        })
    })

    // it('should DELETE a schedule by their id', function(done) {
    //     const deleteRequest = chai.request(app).delete(`/schedule/${schedule._id}`);
    //     deleteRequest.end((err, res) => {
    //         assert(res.statusCode==200);
    //     done();
    //     })
    // })

    //TODO add param to update
    it('should PUT revisions for a schedule by its id', function(done) {
        const putRequest = chai.request(app).put(`/schedule/${schedule._id}`);
        putRequest.end((err, res) => {
            assert(res.statusCode==200);
        done();
        })
    })
})