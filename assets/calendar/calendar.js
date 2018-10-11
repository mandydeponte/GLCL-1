let calendar = () => {

  const firstDay = (year, month) => {
    return new Date(year, month - 1, 1).getDay();
  }

  const lastDay = (year, month) => {
    return new Date(year, month, 0).getDate();
  }

  // Return today's date and time
  const currentTime = new Date();

  // returns the month (from 0 to 11)
  const currentMonth = currentTime.getMonth() + 1;

  // returns the day of the month (from 1 to 31)
  const currentDay = currentTime.getDate();

  // returns the year (four digits)
  const currentYear = currentTime.getFullYear();

  const lastMonth = (year, month, dayOfWeek) => {
    let previousMonth = month - 1;
    const daysInPreviousMonth = (y, p) => {
      let previousMonthArr = [];
      let ld = lastDay(y, p);
      let i = 0;
      while(i < daysOfTheWeek.length){
        previousMonthArr.push(ld);
        ld--;
        i++;
      }
      return previousMonthArr;
    }
    if(previousMonth < 1){
      previousMonth = 12;
      return daysInPreviousMonth(year-1, previousMonth);
    }else{
      return daysInPreviousMonth(year, previousMonth);
    }
  }




  const daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const calendarHead = document.getElementById('calendar-head');
  const populateCalendarHead = () => {
    for(let i = 0; i<daysOfTheWeek.length; i++){
      let day = document.createElement('p');
      day.innerHTML = daysOfTheWeek[i];
      calendarHead.appendChild(day);
    }
  }
  populateCalendarHead();

  const calendarBody = document.getElementById('calendar-body');
  const populateCalendarBody = (selectedYear, selectedMonth) => {
calendarBody.innerHTML = "";
    const currentDaysInMonth = lastDay(selectedYear, selectedMonth);
    const firstDayOfMonth = firstDay(selectedYear, selectedMonth);
    //TODO: Create lastMonthArr const which is equal to the lastMonth function which
    const lastMonthArr = lastMonth(selectedYear, selectedMonth, firstDayOfMonth);
    const daysInRow = 7;
    const totalRows = 6;
    let currentRows = 0;
    let currentDayOfMonthIndex = 1; //current day of current month (e.g. september)
    let currentCalendarDayIndex = 0; //current index of days on calendar (i.e. daysInRow * totalRows)
    let lastDaysIndex = 1;
    //TODO: Create lmaIndex variable which is equal to the firstDayOfMonth-1
    let lmaIndex = firstDayOfMonth-1;


    while(currentRows < totalRows){
      const calendarRow = document.createElement('div');
      for(let i = 0; i<daysInRow; i++){
        const day = document.createElement('p');

        if(currentCalendarDayIndex < firstDayOfMonth){
          day.innerHTML = lastMonthArr[lmaIndex];
          day.classList.add('grayedOut');
          lmaIndex--;
        }else if(currentCalendarDayIndex>=firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth){
          day.innerHTML = currentDayOfMonthIndex;
          currentDayOfMonthIndex++;
        }else{
          day.innerHTML = lastDaysIndex;
          day.classList.add('grayedOut');
          lastDaysIndex++;
        }

        currentCalendarDayIndex++;
        calendarRow.appendChild(day);
      }
      calendarBody
      .appendChild(calendarRow)
      .className = "calendar-row";
      currentRows++;
    }
  }
  populateCalendarBody(currentYear, currentMonth);
  const calendar = document.getElementById('calendar');
  let currentMonthIndex = currentMonth.valueOf();
  let currentYearIndex = currentYear.valueOf();
  console.log('currentMonthIndex', currentMonthIndex);

  calendar.addEventListener('monthChange', function(event){
    const changeDirection = event.detail.changeDirection;
    if(changeDirection === 'left'){
      currentMonthIndex=currentMonthIndex-1;
      populateCalendarBody(currentYearIndex, currentMonthIndex);
    }else if(changeDirection === 'right'){
      currentMonthIndex=currentMonthIndex+1;
      populateCalendarBody(currentYearIndex, currentMonthIndex+1);
    }
    console.log('event', event);
  }, true);
};

document.addEventListener('DOMContentLoaded', calendar, false);
