const User = require('../../src/schema/user_schema');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Users must have required parameters', function() {
    it('Should not create a User without any parameters', (done) => {
      new User().validate(function(err) {
        expect(err).to.exist;
      });
      done();
    });

    it('Should not create a User without full_name', (done) => {
      new User({username:"mhilton", password:"secret"}).validate(function(err) {
        expect(err).to.exist;
      });
      done();
    });

    it('Should not create a user without password', (done) => {
      new User({username:"mhilton", full_name:"Michael Hilton"}).validate(function(err) {
        expect(err).to.exist;
      });
      done();
    });

    it('Should not create a user without username', (done) => {
      new User({full_name:"Michael Hilton", password:"secret"}).validate(function(err) {
        expect(err).to.exist;
      });
      done();
    });
});

describe('Users can be created with required params', function() {
    it('Should create a user with required params', (done) => {
        new User({full_name:"Michael Hilton", username:"mhilton", password:"secret"}).validate(function(err) {
          assert.equal(err, null);
        });
        done();
    });
});
