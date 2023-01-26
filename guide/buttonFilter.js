// re-filter function
function change(){
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
              item.style.display = 'block';
          });
       });
    }
    // actual filtering
    else {
      chekboxInputs.forEach(function(input){
          // finding results for each checkbox option
          Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function(item){
            item.style.display = input.checked ? 'block' : 'none';

          });
       });
    }
}
// re-filter function init
change();
