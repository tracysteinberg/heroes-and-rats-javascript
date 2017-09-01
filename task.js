 var Task = function(difficulty, urgency, reward, complete) {
  this.difficulty = 10;
  this.urgency = 10;
  this.reward = 100;
  this.complete = true;
}

// RecordStore.prototype = {
//    addToBalance: function(money) {
//    this.balance += money;
//    },

//    addToInventory: function(record) {
//    this.inventory.push(record);
//    },
// }


module.exports=Task;