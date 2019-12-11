document.addEventListener("DOMContentLoaded", menu_init);

function menu_init(){
  var BtnHmb= document.getElementsByClassName("menuh")[0];
  var ListMnu=document.querySelectorAll("header nav ul")[0];
  BtnHmb.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    if(ListMnu.classList.contains("hidden")){
      ListMnu.classList.remove("hidden");
      BtnHmb.classList.add("show");
    }else{
      ListMnu.classList.add("hidden");
      BtnHmb.classList.remove("show");
    }
  });
}