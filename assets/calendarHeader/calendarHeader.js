let month = document.getElementById('month');
let leftArrow = document.getElementById('arrow-left');
let rightArrow = document.getElementById('arrow-right');

let monthSetter = (monthToSet) =>{
	month.innerHTML = monthToSet;
}

monthSetter('September');

let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
let monthIndex = 9;

leftArrow.addEventListener('click', function(){
	if(monthIndex > 0){
    monthIndex--;
    monthSetter(monthArr[monthIndex]);
  }
});

rightArrow.addEventListener('click', function(){
	if(monthIndex < (monthArr.length-1) ){
    monthIndex++;
    monthSetter(monthArr[monthIndex]);
  }
});
