
function makeItActive(id) {
  var item = document.getElementById(id);
  var items = document.getElementsByClassName("nav-item-1");
  var i;
  for ( i = 0 ; i < items.length ; i++){
    items[i].classList.remove("nav-item-1-active");
  }
  item.classList.add("nav-item-1-active")
}
