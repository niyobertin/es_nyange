let myIndex = 0;
carousel();

function carousel() {
  let i;
  let home = document.getElementsByClassName("home");
  for (i = 0; i < home.length; i++) {
    home[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > home.length) {myIndex = 1}    
  home[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 6 seconds
}

let menuList = document.getElementById("menuList");
menuList.style.maxHeight="0px";
function loadMenu(){
  if(menuList.style.maxHeight =="0px"){
    menuList.style.maxHeight ="230px";
  }else{
    menuList.style.maxHeight ="0px";
  }
}