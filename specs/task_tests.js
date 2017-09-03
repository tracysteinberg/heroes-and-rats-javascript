var assert = require('assert')
var Hero = require('../hero.js')
var Task = require('../task.js')
var Food = require('../food.js')

describe('task', function () {

  
  var task;
  

  beforeEach(function()  {

  task1 = new Task(20, 30, 100, new Boolean(true));

  task2 = new Task 
        {
        (20, 30, 100, new Boolean(true)),
      
        (10, 15, 25, new Boolean(false)),

        (30, 25, 30, new Boolean(false)) 
        }

  });


  it("should make sure task has difficulty", function() {
    assert.strictEqual(task1.difficulty, 20);
    })

  it("should make sure task has urgency", function() {
    assert.strictEqual(task1.urgency, 30);
    })

  it("should make sure task has reward", function() {
     assert.strictEqual(task1.reward, 100);
    })

  it("should make sure task can complete", function() {
    task1.finish()
    assert.deepStrictEqual(task1.complete, true);
   })
  
   it("should sort tasks by difficulty", function() {
    task2.sort()
    assert.deepStrictEqual(task2.difficulty, (30, 20, 10));
   })


 }) 

  







