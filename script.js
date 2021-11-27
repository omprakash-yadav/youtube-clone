var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
const videoCardContainer=document.getElementById("#video-container")

menuIcon.onClick = function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
};



const searchInput=document.querySelector(".search-bar");
const searchBtn=document.querySelector(".search-btn");
let searchLink="https://www.youtube.com/results?search_query=zeen";

searchBtn.addEventListener("click",()=>{
  if(searchInput.value.length){
    location.href=searchLink+searchInput.value;
  }
})