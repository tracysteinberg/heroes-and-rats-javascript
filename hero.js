 var Hero = function(name, health, greeting, fav_food) {
  this.name = name;
  this.health = 10;
  this.greeting = greeting;
  this.fav_food = fav_food;
  this.task_list = [];
}

Hero.prototype = {

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


  Hero.prototype.eat = function(food) {
     if (food.name === this.fav_food) {

    // food.replenishment = 0

      this.health += (1.5 * food.replenishment)
    } else {
      this.health += food.replenishment
    }

}


  
  



     
    



  


module.exports=Hero;