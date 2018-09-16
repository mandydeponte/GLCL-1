let calendarHeader = () => {
  let titleSetter = (newTitle) => {
    title.innerHTML = newTitle;
  };

  titleSetter('September');
  let titleArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
  console.log(titleArr[0]);

let titleCarousel = document.getElementById("title-carousel");
let node = document.createElement("p");
node.id = "left-arrow";
node.classList.add("arrow.fas.fa-chevron-left", "calendar-header", "title-carousel");
titleCarousel.appendChild(node);

let rawr = document.createElement("p");
rawr.id = "titleIndex";
rawr.classList.add("calendar-header", "title-carousel");
titleCarousel.appendChild(rawr);

let hey = document.createElement("p");
hey.id = "right-arrow";
hey.classList.add("arrow.fas.fa-chevron-right", "calendar-header", "title-carousel");
titleCarousel.appendChild(hey);

let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
let titleIndex = 8;
leftArrow.addEventListener('click', ()=>{
  if(titleIndex > 0){
    titleIndex--;
    titleSetter(titleArr[titleIndex]);
  }
});
rightArrow.addEventListener('click', ()=>{
  if(titleIndex < titleArr.length-1){
    titleIndex++;
    titleSetter(titleArr[titleIndex]);
  }
});
};

document.addEventListener('DOMContentLoaded', calendarHeader, false);
