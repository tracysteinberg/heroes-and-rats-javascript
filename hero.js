 var Hero = function(name, health) {
  this.name = name;
  this.health = 10;
  // this.favouriteFood = favouriteFood;
  this.task_list = [];
}

Hero.prototype = {
//    addToBalance: function(money) {
//    this.balance += money;
//    },

      addToTask: function(task) {
      this.task_list.push(task);
    },
  }


module.exports=Hero;