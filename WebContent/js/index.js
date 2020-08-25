let selectElement = document.getElementById("display-style");

selectElement.addEventListener('change', (event) => {

  if(event.target.value == 'light'){
    document.body.style.backgroundColor = 'white';
    document.querySelector(".menu-item-logo h1 a").style.color="black";
    let menus = document.querySelectorAll("nav.menu-item ul li a");
    menus[0].style.color="#222";
    menus[1].style.color="#222";
  }else if(event.target.value == 'dark'){
    document.body.style.backgroundColor = 'darkslategray';
    //document.body.style.color = "white";
    document.querySelector(".menu-item-logo h1 a").style.color="white";
    let menus = document.querySelectorAll("nav.menu-item ul li a");
    menus[0].style.color="white";
    menus[1].style.color="white";
  }
});

let hearts = document.querySelectorAll(".favoriate i");
for (let i=0; i<hearts.length; i++){
  hearts[i].addEventListener("click", function(event){
    // add to favoriate list
    console.log(event.target);
    event.target.classList.toggle("far");
    event.target.classList.toggle("fas");
    
  });
}
