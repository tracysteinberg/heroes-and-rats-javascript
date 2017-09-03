 var Task = function(difficulty, urgency, reward, complete) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = false;
}

Task.prototype.finish = function() {
	this.complete = true;
}


Task.prototype.sort = function() {

// difficulty of tasks

var descending = task2.sort((a, b) => Number(b.difficulty) - Number(a.difficulty));
 


}




module.exports=Task;