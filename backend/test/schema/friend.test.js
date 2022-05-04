const Friend = require('../../src/schema/friend_schema');
const User = require('../../src/schema/user_schema');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Friends should not exist without exactly 2 users', function() {
  let user1 = {};

  before(function(done) {
    user1 = new User({username: 'a', password: 'alsoa', full_name: 'a a'});
    if (user1.validate()) {
      done();
    } else {
      throw new TypeError('User did not validate');
    }
  });

  it('Should not create a friend with 0 users', (done) => {
    new Friend().validate(function(err) {
      expect(err).to.exist;
    });
    done();
  });

  it('Should not create a friend with 1 user', (done) => {
    new Friend({friend_1: user1._id}).validate(function(err) {
      expect(err).to.exist;
    });
    done();
  });
});


describe('Friends can be created with required params', function() {
  let user1 = {};
  let user2 = {};

  before(function(done) {
    user1 = new User({username: 'a', password: 'alsoa', full_name: 'a a'});
    user2 = new User({username: 'b', password: 'alsob', full_name: 'b b'});
    if (user1.validate() && user2.validate()) {
      done();
    } else {
      throw new TypeError('Users did not validate');
    }
  });

  it('Should create a friend with required params', (done) => {
    const friend = new Friend({friend_1: user1._id, friend_2: user2._id});
    assert(friend.validate());
    done();
  });
});
