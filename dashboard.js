let dashboard = () => {
  let calendarContainer = document.getElementById('body');
  calendarContainer.addEventListener('arrowClick', function(event){
      console.log('arrow clicked!', event);
    });
};

document.addEventListener('DOMContentLoaded', dashboard, false);
