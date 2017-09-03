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

var sort_by = function(field, reverse, primer){

   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b, c) {
       return a = key(a), b = key(b), c = key(c), reverse * ((a > b) - (b > a)- (a > c) - (b > c) - (c > a) - (c > b));
     } 
}
 




}




module.exports=Task;