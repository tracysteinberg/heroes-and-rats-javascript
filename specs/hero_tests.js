var assert = require('assert')
var Hero = require('../hero.js')
var Task = require('../task.js')
var FavouriteFood = require('../food.js')

describe('hero', function () {

  var hero;
  var task;
  var fav_food;

  beforeEach(function()  {
  hero = new Hero("BatMan", 100);
  task1 = new Task(10, 10, 100, new Boolean(true));
  fav_food = new FavouriteFood("Bananas", 10)
  });

   it("should make sure properties are set for hero", function() {
     assert.strictEqual(hero.name, "BatMan");
     assert.strictEqual(hero.health, 10);
     assert.deepStrictEqual(hero.fav_food, []);
     assert.deepStrictEqual(hero.task_list, []);
//   });
  
  })

  it("should make sure properties are set for task", function() {
    assert.strictEqual(task1.difficulty, 10);
    assert.strictEqual(task1.urgency, 10);
    assert.strictEqual(task1.reward, 100);
    assert.strictEqual(task1.complete, true);
    // assert.deepStrictEqual(recordStore.inventory, []);
    // assert.strictEqual(recordStore.balance, 0)
    });

 it("should make sure properties are set for favourite food", function() {
    assert.strictEqual(fav_food.name, "Bananas");
    assert.strictEqual(fav_food.replenishment, 10);
    });






//    it("should make sure that we can add balance to recordStore", function() {
//      recordStore.addToBalance(1000)
//      assert.strictEqual(recordStore.balance, 1000);
//    });

//   it("should make sure that we can add record to recordStore", function() {
//     recordStore.addToInventory(record1)
//     assert.deepStrictEqual(recordStore.inventory, [record1]);
//   });

//   it("should make sure that we can print out record properties", function() {
//     assert.strictEqual(recordStore.displayProperties(), "The Beatles Help! Rock 100");
//   });

});



