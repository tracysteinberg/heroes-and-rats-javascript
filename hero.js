 var Hero = function(name, health) {
  this.name = name;
  this.health = 10;
  this.fav_food = [];
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



  //     displayProperties: function(){
  //     return this.artist + " " + this.title + " " + this.genre + " " + this.price;
  // });



  }


module.exports=Hero;