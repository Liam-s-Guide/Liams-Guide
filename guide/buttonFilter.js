// re-filter function
function change(){
    // must be the same as opacity in function fading()
    document.getElementsByClassName('places')[0].style.opacity = 0.5;

    var checkboxes = document.getElementsByClassName('checkbox');
    var chekboxInputs = Array.from(checkboxes).map(a => a.querySelector('input'));
    var allAreUnselected = chekboxInputs.every(function(elem){
      // control for newly loaded checkboxes
       return !elem.checked;
    });


    // this shit mucho importante (loads back divs when all are unselected)
    if(allAreUnselected){
       chekboxInputs.forEach(function(input){
          Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function(item){
              item.style.display = 'grid';
              item.style.opacity = 1;
              fading();

          });
       });
       fading();
    }
    // actual filtering
    else {
      chekboxInputs.forEach(function(input){
          // finding results for each checkbox option
          Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function(item){
            item.style.display = input.checked ? 'grid' : 'none';
            item.style.opacity = input.checked ? 1 : 0;
            fading();
          });
       });
       fading();
    }
}
// re-filter function init
change();

function fading(){
    var increment = 0.05;
    var opacity = 0.5;
    var instance = window.setInterval(function() {
        document.getElementsByClassName('places')[0].style.opacity = opacity
        opacity = opacity + increment;
        if(opacity > 1){
            window.clearInterval(instance);
        }
    },25)
}
