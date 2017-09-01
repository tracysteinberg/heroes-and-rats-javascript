var assert = require('assert')
var Hero = require('../hero.js')
var Task = require('../task.js')
var FavouriteFood = require('../food.js')

describe('food', function () {

  
  var fav_food;
  

  beforeEach(function()  {


   fav_food = new FavouriteFood("Bananas", 10);
 
  
  });


  it("favourite food should have name", function() {
    assert.strictEqual(fav_food.name, "Bananas");

  })

  it("favourite food can replenish", function() {
    assert.strictEqual(fav_food.replenishment, 10);

  })

  
 }) 

  









