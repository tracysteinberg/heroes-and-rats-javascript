var assert = require('assert')
var Hero = require('../hero.js')
var Task = require('../task.js')
var Food = require('../food.js')

describe('hero', function () {

  var hero;
  var task;
  var talk;

  beforeEach(function()  {

  task1 = new Task(10, 10, 100, new Boolean(true));
  hero = new Hero("BatMan", 10, "My name is", "bananas");

  });

     it("hero should have name", function() {
     assert.strictEqual(hero.name, "BatMan");
    })

     it("hero should have health", function() {
     assert.strictEqual(hero.health, 10);
    })

     it ("hero should have favourite food", function() {
     assert.strictEqual(hero.fav_food, "bananas");
    })

     it("hero can talk saying name", function() {
     assert.strictEqual(hero.talk(), "My name is BatMan");
    })

     it ("hero should have a task list array", function() {
     assert.deepStrictEqual(hero.task_list, []);
    })


    it("Hero should be able to increase health/replenishment eating food", function() {
  
      var bread = new Food("bread", 15);
      hero.eat(bread);
      assert.strictEqual(hero.health, 25);
    })


    it("Hero should be able to increase health by 1.5 by eating fav food", function() {
      
      var bananas = new Food("bananas", 15);
      hero.eat(bananas);
      assert.strictEqual(hero.health, 32.5);
    })



 }) 

  








