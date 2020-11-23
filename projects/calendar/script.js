function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Requirement 1;
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let getDayList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
      let dayNumber = dezDaysList[index];
      let dayElement = document.createElement('li');
      dayElement.className = 'day';
      if (dayNumber === 4 | dayNumber === 11 | dayNumber === 18) {
          dayElement.className = 'day-friday';
          dayElement.innerHTML = dayNumber;
          getDayList.appendChild(dayElement);
      } else if (dayNumber === 24 | dayNumber === 31) {
          dayElement.className = 'day-holiday';
          dayElement.innerHTML = dayNumber;
          getDayList.appendChild(dayElement);
      } else if (dayNumber === 25) {
          dayElement.className = 'holiday-friday-day';
          dayElement.innerHTML = dayNumber;
          getDayList.appendChild(dayElement);
      } else {
          dayElement.innerHTML = dayNumber;
          getDayList.appendChild(dayElement);
      };
  };
};
createDaysOfTheMonth();

//Requirement 2;

function createButtonFeriados(string) {
let buttonFeriados = document.createElement('button');
buttonFeriados.id = 'btn-holiday';
buttonFeriados.innerText = string;
let buttonFeriadosContainer = document.querySelector('.buttons-container');
buttonFeriadosContainer.appendChild(buttonFeriados);
};
createButtonFeriados("Feriados", 'btn-holiday');

//Requirement 3;

function changeColorOnHolidays() {
const backgroundColor = "rgb(238,238,238)";
const button = document.querySelector('#btn-holiday');
  const holidays = document.querySelectorAll('.day-holiday');
  const holidayFriday = document.querySelectorAll('.holiday-friday-day');

button.addEventListener("click", changeColor);
function changeColor() {
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === "#af4ef7") {
              holidays[index].style.backgroundColor = "rgb(238,238,238)";
              holidays[index].style.color = "#777";                
    } else {
              holidays[index].style.backgroundColor = "#af4ef7";
              holidays[index].style.color = "white";
    };
      };
      for (let index1 = 0; index1 < holidayFriday.length; index1 += 1) {
          if (holidayFriday[index1].style.backgroundColor === "#af4ef7") {
              holidayFriday[index1].style.backgroundColor = "rgb(238,238,238)";
              holidayFriday[index1].style.color = "#777";
          } else {
              holidayFriday[index1].style.backgroundColor = "#af4ef7";
              holidayFriday[index1].style.color = "white";
          };
      };
};
};
changeColorOnHolidays();

//Requirement 4;

function createButtonFridays(buttonName) {
let buttonFridays = document.createElement('button');
buttonFridays.id = 'btn-friday';
buttonFridays.innerText = buttonName;
let buttonFridaysContainer = document.querySelector('.buttons-container');
buttonFridaysContainer.appendChild(buttonFridays);
};
createButtonFridays("Sexta-feira");

// Requirement 5;

let fridaysChanged = false;

function fridaysChanger() {
// Picking all fridays
const allFridays = document.querySelectorAll('.day-friday');
const fridayHoliday = document.querySelectorAll('.holiday-friday-day');

for (let index = 0; index < allFridays.length; index += 1) {
  // If fridays are not changed yet, change them
  if (fridaysChanged === false) {
    allFridays[index].innerHTML = 'SEXTOU!!';
  }
  // If fridays are already changed, switch them back to normal
  else {
    let thisFriday = allFridays[index];
    let previousDay = parseInt(thisFriday.previousSibling.innerHTML);
    thisFriday.innerHTML = previousDay + 1;
  }
}
for (let index1 = 0; index1 < fridayHoliday.length; index1 += 1) {
  // If fridays are not changed yet, change them
  if (fridaysChanged === false) {
    fridayHoliday[index1].innerHTML = 'SEXTOU!!';
  }
  // If fridays are already changed, switch them back to normal
  else {
    let thisFriday1 = fridayHoliday[index1];
    let previousDay1 = parseInt(thisFriday1.previousSibling.innerHTML);
    thisFriday1.innerHTML = previousDay1 + 1;
  }
}
fridaysChanged = !fridaysChanged;
}

let btnFridays = document.getElementById('btn-friday');
btnFridays.addEventListener('click', fridaysChanger);
