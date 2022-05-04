const Course = require('../../src/schema/course_schema');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('Courses should not exist without a courseID and name', function() {
  it('Should not create a course with no courseID or name', (done) => {
    new Course().validate(function(err) {
      expect(err).to.exist;
    });
    done();
  });

  it('Should not create a course with no courseID', (done) => {
    new Course({name: 'SE for Startups'}).validate(function(err) {
      expect(err).to.exist;
    });
    done();
  });

  it('Should not create a course with no name', (done) => {
    new Course({courseID: 17356}).validate(function(err) {
      expect(err).to.exist;
    });
    done();
  });
});


describe('Courses can be created with required params', function() {
  it('Should create a course with required params', (done) => {
    const course = new Course({courseID: 17356, name: 'SE for Startups'});
    assert(course.validate());
    done();
  });
});
