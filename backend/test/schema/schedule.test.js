const Schedule = require('../../src/schema/schedule_schema');
const User = require('../../src/schema/user_schema');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Schedules should not exist without a user', function() {
  it('Should not create a schedule without a user', (done) => {
    new Schedule().validate(function(err) {
      expect(err).to.exist;
    });
    done();
  });
});

describe('Schedules should not exist with bogus arrays', function() {
  let user1 = {};

  before(function(done) {
    user1 = new User({username: 'a', password: 'alsoa', full_name: 'a a'});
    if (user1.validate()) {
      done();
    } else {
      throw new TypeError('User did not validate');
    }
  });

  it('Should not create a schedule w/ dummy strings in array', (done) => {
    const schedule = new Schedule({
      user_id: user1._id,
      courses: ['abc', 'def'],
    });
    schedule.validate(function(err) {
      expect(err).to.exist;
    });
    done();
  });

  it('Should not create schedule w/ courses and dummys in array', (done) => {
    const schedule = new Schedule({
      user_id: user1._id,
      courses: ['15-213', 'def'],
    });
    schedule.validate(function(err) {
      expect(err).to.exist;
    });
    done();
  });
});

describe('Schedules can exist with valid parameters', function() {
  let user1 = {};

  before(function(done) {
    user1 = new User({username: 'a', password: 'alsoa', full_name: 'a a'});
    if (user1.validate()) {
      done();
    } else {
      throw new TypeError('Users did not validate');
    }
  });

  it('Should create a schedule with required params (no courses)', (done) => {
    const schedule = new Schedule({user1: user1._id, courses: []});
    assert(schedule.validate());
    done();
  });

  it('Should create a schedule with required params (w/ courses)', (done) => {
    const schedule = new Schedule({user1: user1._id, courses: ['15-122']});
    assert(schedule.validate());
    done();
  });
});

