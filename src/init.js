$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // debugger;
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      (($("body").height() - 32) * Math.random()) + 32,
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  $(".lineUpButton").on("mousedown", function(event){

    lineUpAll();

  });

  $(".lineUpButton").on("mouseup", function(event){

    disperse();

  });

  $('body').on('mouseover', '.dancer.square', function(){
    var style = {
      width: $(this).width() + 10,
      height: $(this).height() + 10
    };

    $(this).animate(style);
  });
  $('.pairUpButton').click(function () {
    pairUp();
  });
  var startDancing;
  $('.startDancingButton').click(function(){
    startDancing = dance();
  });
  $('.stopDancingButton').click(function(){
    clearInterval(startDancing);
  });


  $('body').on('click', '.dancer.green', function(){
    var index = $(this).data('index');
    // debugger;
    window.dancers[index].eatClosest();
  });

});

