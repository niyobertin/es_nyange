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

let menuList = document.getElementById("link");
menuList.style.display="none";
menuList.style.overflow ="hidden";
menuList.style.transition = "0.5s";
// menuList.style.marginTop ="-1none"
function loadMenu(){
  if(menuList.style.display =="none"){
    menuList.style.display ="block";
  }else{
    menuList.style.display ="none";
  }
}