 var Hero = function(name, health, greeting) {
  this.name = name;
  this.health = 10;
  this.fav_food = [];
  this.greeting = greeting;
  this.task_list = [];
}

Hero.prototype = {
//    addToBalance: function(money) {
//    this.balance += money;
//    },

      addToTask: function(task) {
      this.task_list.push(task);
    },


      addToFood: function(food) {
      this.task_list.push(task);
    },


      talk: function(talk){
      return this.greeting+" "+ this.name;
     
    },



  }


module.exports=Hero;