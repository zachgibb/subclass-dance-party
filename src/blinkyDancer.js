var BlinkyDancer = function(top, left, timeBetweenSteps){

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);

  this.oldStep = this.step;

  this.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep(timeBetweenSteps);
    // debugger;
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };
  
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

var GreenBlinkyDancer = function(top, left, timeBetweenSteps) {
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('green');
  this.scale = 1;
  this.step = function(){
    
  };
  
};

GreenBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
GreenBlinkyDancer.prototype.constructor = GreenBlinkyDancer;

var squareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('square');

};

GreenBlinkyDancer.prototype.eatClosest = function() {
    var closest = {
        node: null,
        distance: null,
        index: null
    }
    for (var i = 0; i < window.dancers.length; i++) {
        var a = this.top - dancers[i].top;
        var b = this.left - dancers[i].left;
        var c = (a * a) + (b * b);
        // debugger;
        if (closest.distance === null && c > 0) {
          closest.distance = c;
          closest.node = dancers[i];
          closest.index = i;
        } else if (c > 0 && c < closest.distance) {
          closest.distance = c;
          closest.node = dancers[i];
          closest.index = i;
        }

    }
    closest.node.$node.remove();
    dancers.splice(closest.index, 1);
    this.scale = this.scale + 0.25;
    this.$node.css({transform: 'scale('+ this.scale +', '+ this.scale +')'});
    console.log(closest);
}

squareDancer.prototype = Object.create(Dancer.prototype);
squareDancer.prototype.constructor = squareDancer;