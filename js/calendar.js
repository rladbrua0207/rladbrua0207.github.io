const today = new Date();
const calendar_title = document.querySelector("#calendar_title");
const calendar = document.getElementById("calendar");
const month_name=["January","February","March","April","May","June","July","August","September","October","November","December"];
const week =["일","월","화","수","목","금","토"];
const SELECTED_DATE = "selected_date";
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let day = today.getDay();
let first_day = new Date(year,month,1).getDay();//요일의 값
let first_date = new Date(year,month,1).getDate();//이달 첫째날
let last_date = new Date(year,month+1,0).getDate();//이달 마지막날
let row;
let cell;

function makeCalendar(){
    calendar_title.innerHTML = `${month_name[month]} ${year}`
    row = calendar.insertRow();
    for(let i = 0; i < first_day; i++){
        cell = row.insertCell();
    }

    for(let i = 1; i <= last_date; i++){
        if(first_day != 7){
            cell = row.insertCell();
            cell.setAttribute('id', [i]);
            cell.innerHTML= [i]; //?
            if(first_day===6){
                cell.classList.add("sat");
            }else if(first_day===0){
                cell.classList.add("sun");
            }
            first_day +=1;
            if(today.getFullYear() === year && today.getMonth() === month && i === date){
                cell.classList.add(SELECTED_DATE);
            }
        }else{
            //첫줄의 first_day 값이 7이되면 작동
            row = calendar.insertRow();
            //행 추가
            cell = row.insertCell();
            cell.setAttribute('id',[i]);
            cell.innerHTML = [i];
            if(first_day===7){
                cell.classList.add("sun");
            }
            first_day = first_day - 6;
            
            if(today.getFullYear() === year && today.getMonth() === month && i === date){
                cell.classList.add(SELECTED_DATE);
            }
        }
        
    }
        todoDateRefresh();
}
makeCalendar();
// -----------------------------------------------------------------------
const prev_month_button = document.querySelector(".calendar_prev_button");
const next_month_button = document.querySelector(".calendar_next_button");

function handlePrevMonth(){
    while(calendar.rows.length > 1){
        calendar.deleteRow(calendar.rows.length-1)
    }
    month = month-1;
    if(month === -1){
        year = year -1;
        month = month + 12;
    }
    first_day = new Date(year,month,1).getDay();//요일의 값
    last_date = new Date(year,month+1,0).getDate();//이달 마지막날
    first_date = new Date(year,month,1).getDate();//이달 첫째날
    makeCalendar();
}

function handleNextMonth(){
    while(calendar.rows.length > 1){
        calendar.deleteRow(calendar.rows.length-1)
    }
    month = month+1;
    if(month === 12){
        year = year +1;
        month = month - 12;
    }
    first_day = new Date(year,month,1).getDay();//요일의 값
    last_date = new Date(year,month+1,0).getDate();//이달 마지막날
    first_date = new Date(year,month,1).getDate();//이달 첫째날
    makeCalendar();
}

prev_month_button.addEventListener("click",handlePrevMonth);
next_month_button.addEventListener("click",handleNextMonth);

// --------------------------------------------------------------
const tbody = document.querySelector("tbody");

function removeSelected(){
    let prevSelectedDay = document.querySelector(".selected_date");
    //console.log(prevSelectedDay);
    prevSelectedDay ? prevSelectedDay.classList.remove(SELECTED_DATE)
                    : null;
}

function handleClickDate(event){
    // console.log(event.target.tagName);
    const tagName = event.target.tagName;
    if(tagName === "TH" || tagName === "TR" || tagName=== "TBODY"){
        return;
    }else{
        removeSelected();
        event.target.classList.add(SELECTED_DATE);
        todoDateRefresh();
    }
    // console.log(event.target.innerHTML);
}

tbody.addEventListener("click",handleClickDate);
