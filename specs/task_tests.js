var assert = require('assert')
var Hero = require('../hero.js')
var Task = require('../task.js')
var FavouriteFood = require('../food.js')

describe('task', function () {

  
  var task;
  

  beforeEach(function()  {

  task1 = new Task(10, 10, 100, new Boolean(true));
  
  });


  it("should make sure task has difficulty", function() {
    assert.strictEqual(task1.difficulty, 10);
    })

  it("should make sure task has urgency", function() {
    assert.strictEqual(task1.urgency, 10);
    })

  it("should make sure task has urgency", function() {
     assert.strictEqual(task1.reward, 100);
    })

  it("should make sure task can complete", function() {
     assert.strictEqual(task1.complete, true);
   })
  
 }) 

  

 // it("should make sure properties are set for favourite food", function() {
 //    assert.strictEqual(fav_food.name, "Bananas");
 //    assert.strictEqual(fav_food.replenishment, 10);
 //    })







