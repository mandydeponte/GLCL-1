let calendar = () => {

  const firstDay = (year, month) => {
    return new Date(year, month - 1, 1).getDay();
  }

  const lastDay = (year, month) => {
    return new Date(year, month, 0).getDate();
  }

  //TODO: Create currentTime, currentDay, currentMonth, currentYear variables based on this stack overflow answer
  //https://stackoverflow.com/a/6002265/5885911

// Return today's date and time
const currentTime = new Date()

// returns the month (from 0 to 11)
const month = currentTime.getMonth() + 1

// returns the day of the month (from 1 to 31)
const day = currentTime.getDate()

// returns the year (four digits)
const year = currentTime.getFullYear()

// write output MM/dd/yyyy
document.write(month + "/" + day + "/" + year)
  //Use const rather than let or var, we use const when a variable doesn't get reassigned or updated overtime.
  //Since these are functions, we don't expect the functions to change so we can make them constants.

  //TODO: Create the lastMonth function which takes the arguments, "year", "month", "dayOfWeek"

  const lastMonth = (year, month, dayOfWeek) => {
    return new Month(year, month, 0).getMonth();
  }

  //Create the previousMonth variable which is equal to month-1
    const previousMonth = month-1;

  //Create the daysInPreviousMonth function which takes two arguments, "y", "p".
  // Y represents current year, p represents previousMonth
  //Within function
  //Create a variable called previousMonthArr which is equal to an emptyArr,
  //you would use let for this variable since we will be pushing items to the array
  const daysInPreviousMonth = (y, p) => {
    let previousMonthArr = emptyArr;
  }

    //Create an ld variable which is equal to the lastDay function and takes the arguments, y and p
    //Create a variable i which is equal to 0, we will use let here since i is an index and will be updated
    //Create a while loop, which says while the index is less than daysOfTheWeek
      //Inside while loop
      //push ld to the previousMonthArr
      //decrement ld
      //increment i
    //outside of while loop, return previousMonthArr
  //outside of daysInPreviousMonth function
  //if previous month is less than 1
    //previous month = 12 (we're setting the previous month to December, if the current month is January)
    //return the daysInPreviousMonth function which takes the arguments year-1 and previousMonth
  //else
    //return the daysInPreviousMonth function which takes the arguments year and previousMonth
//end lastMonth function

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
  const populateCalendarBody = () => {
    const currentDaysInMonth = lastDay(2018, 9);
    const firstDayOfMonth = firstDay(2018, 9);
    //TODO: Create lastMonthArr const which is equal to the lastMonth function which
    // takes the arguments currentYear, currentMonth, and firstDayOfMonth
    const daysInRow = 7;
    const totalRows = 6;
    let currentRows = 0;
    let currentDayOfMonthIndex = 1; //current day of current month (e.g. september)
    let currentCalendarDayIndex = 0; //current index of days on calendar (i.e. daysInRow * totalRows)
    //TODO: Create lmaIndex variable which is equal to the firstDayOfMonth-1

    while(currentRows < totalRows){
      const calendarRow = document.createElement('div');
      for(let i = 0; i<daysInRow; i++){
        const day = document.createElement('p');
        //TODO: Create a new if condition which says
        //"If the currentCalendarDayIndex is less than the firstDayOfMonth"
          //Within the if condition
          //set day inner html to the current lmaIndex of the lastMonthArr
          //add the 'grayedOut' class to the classList of the "day" variable
          //decrement the lmaIndex

        //This if condition says "start adding days to the calendar, if the
        //first weekday of the current month has been reached"
        if(currentCalendarDayIndex>=firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth){
          day.innerHTML = currentDayOfMonthIndex;
          currentDayOfMonthIndex++;
        }

        //TODO: BONUS: You can add another if condition here if you want, which will just say "add grayed numbers to the end of the month until we run out of space on the calendar"


        currentCalendarDayIndex++;
        calendarRow.appendChild(day);
      }
      calendarBody
      .appendChild(calendarRow)
      .className = "calendar-row";
      currentRows++;
    }
  }
  populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
