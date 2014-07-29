// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer" data-index="'+dancers.length+'"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var self = this;


   // debugger;
  setTimeout(this.step.bind(this), self.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

var lineUpAll = function (){
  var style = {
    // top: this.top,
    left: '10px'
  }; // what is this line for?
  $('.dancer').animate(style);
};

var disperse = function (){

  $('.dancer').each(function(key, value) {
    var style = {
      // left: dancers[key].left
      top: (($("body").height() - 32) * Math.random()) + 32,
      left: $("body").width() * Math.random()
    };
    $(this).animate(style);
    
  });

};

var pairUp = function () {
  for (var i = 0; i < window.dancers.length - 1; i += 2) {
    var style = {
      top: (($("body").height() - 32) * Math.random()) + 32,
      left: $("body").width() * Math.random(),
    };
    dancers[i].$node.animate(style);

    dancers[i+1].$node.animate({top: style.top + 20, left: style.left});
    
  }
};

var dance = function () {
  return setInterval(disperse, 1000);
};

var congo = function(){

  $('.dancer').each(function(key, value) {
    var style = {
      // left: dancers[key].left
      top: ($("body").height() / 2),
      left: key * 40
    };
    $(this).animate(style);

    $(this).addClass('congo');
    
  });

};















