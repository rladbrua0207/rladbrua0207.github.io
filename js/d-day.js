const christmas = new Date(2021, 11, 25);
const time = document.querySelector(".time");
const DIV_DAY = 24 * 60 * 60 * 1000;
let d_days = [];
//------------------------------------------

const d_day_form = document.querySelector(".d_day_form");
const d_day_title = document.querySelector("#d_day_title");
const d_day_date = document.querySelector("#d_day_date");
const d_day_month = document.querySelector("#d_day_month");
const d_day_year = document.querySelector("#d_day_year");
const d_day_submit_button = document.querySelector("#d_day_submit_button");
const d_day_list = document.querySelector(".d_day_list");
const D_DAYS_KEY = "d_days";

function handleD_DaySubmit(event) {
  event.preventDefault();

  const title = d_day_title.value;
  const year = d_day_year.value;
  const month = parseInt(d_day_month.value) - 1;
  const date = d_day_date.value;
  d_day_title.value="";
  d_day_date.value ="";
  d_day_month.value="";
  d_day_year.value="";
  if(isNaN(year) || isNaN(month) || isNaN(date)){
      alert("숫자만 적으시오");
  }
  const today = new Date();
  const rest_time =
    parseInt((new Date(year, month, date) - today) / DIV_DAY) + 1;
  //console.log(rest_time);

  const newD_DayObj = {
    title: title,
    year: year,
    month: month,
    date: date,
    id: Date.now(),
  };
  d_days.push(newD_DayObj);
  saveD_Days();
  paintD_Day(newD_DayObj);
}
d_day_form.addEventListener("submit", handleD_DaySubmit);

function saveD_Days() {
  //d_days 배열 localstorage에 저장
  localStorage.setItem(D_DAYS_KEY, JSON.stringify(d_days));
  //배열 그대로는 localstorage에 못들어가므로 문자열로 변환
}

function paintD_Day(newD_DayObj) {
  const li = document.createElement("li");
  const title = document.createElement("div");
  const text = document.createElement("div");
  const today = new Date();
  const rest_time =
    parseInt(
      (new Date(newD_DayObj.year, newD_DayObj.month, newD_DayObj.date) -
        today) /
        DIV_DAY
    ) + 1;
  title.innerText = `${newD_DayObj.title}`;
  text.innerText = `D - ${rest_time}`;
  li.appendChild(title);
  li.appendChild(text);
  d_day_list.appendChild(li);
}
/*function getTime(){
    const today = new Date();
    const day = parseInt((christmas-today)/(DIV_DAY));
    const hours = String(24-today.getHours()).padStart(2,"0");
    const minutes = String(60-today.getMinutes()).padStart(2,"0");
    const seconds = String(60-today.getSeconds()).padStart(2,"0");
    time.innerHTML=`${day}d ${hours}h ${minutes}m ${seconds}s`
}
getTime();
setInterval(getTime,1000);*/

//todoList내용 불러오기

  const savedD_Days = localStorage.getItem(D_DAYS_KEY);

  if (savedD_Days !== null) {
    const parsedD_Days = JSON.parse(savedD_Days);
    //console.log(parsedD_Days);
    //문자열로 변환된 값을 다시 배열로
    d_days = parsedD_Days;
    d_days.forEach((element) => {
      paintD_Day(element);
    });
  }