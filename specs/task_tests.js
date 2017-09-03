var assert = require('assert')
var Hero = require('../hero.js')
var Task = require('../task.js')
var Food = require('../food.js')

describe('task', function () {

  
  var task;
  var task2
  

  beforeEach(function()  {

  task1 = new Task(20, 30, 100, new Boolean(true));

  var task2 = [
        {
         "difficulty": "20", "urgency": "30", "reward": "100"
        }, {
      
         "difficulty": "10", "urgency": "15", "reward": "25" 
        }, {

         "difficulty": "30", "urgency": "25", "reward": "30" 
        } 

  ]});


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
    assert.strictEqual(task2.difficulty, ("30", "20", "10"));
   })


 }) 

  







