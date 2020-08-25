let previewEle = document.querySelector(".preview-btn");
previewEle.onclick = preview;

function preview(){
  console.log("inside preview");
  let top = document.getElementById("custom-top").value;
  let body = document.getElementById("custom-body").value;
  let bottom = document.getElementById("custom-bottom").value;
  let msg= document.getElementById("message");

  if(!top ||!body || !bottom){
    console.log("some are empty");
    msg.innerHTML="Please fill in all three custom fields.";
    msg.style.display = "block";
    return;
  }
 console.log("all filled");
  msg.style.display = "none";
  let template_top = document.querySelector(".top");
  let template_body = document.querySelector(".body");
  let template_bottom = document.querySelector(".bottom");
  template_top.textContent = top;
  template_body.textContent = body;
  template_bottom.textContent = bottom;
}

let heart = document.querySelector(".product-description i");

  heart.addEventListener("click", function(event){
    // add to favoriate list
    console.log(event.target);
    event.target.classList.toggle("far");
    event.target.classList.toggle("fas");

  });
