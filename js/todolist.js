let selected_date;
let selected_month;
let selected_year;
const todo_form = document.querySelector("#todo_form");
const todo_list = document.querySelector(".todo_list");
const todo_input = todo_form.querySelector("input");
const TODOS_KEY = "todos";
const COMPLETE_TODOS_KEY = "complete_todos";
const complete_todo_list = document.querySelector(".complete_todo_list");
let toDos = [];
let complete_toDos = [];
let save_date;

function todoDateRefresh() {
  //calendar.js에서 호출, default값 설정
  const todo_selected_date = document.querySelector(".todo_selected_date");
  selected_date = document.querySelector(".selected_date");
  if (selected_date === null) {
    return;
  }
  const month_year = calendar_title.innerText.split(" ");
  selected_month = month_year[0];
  selected_year = month_year[1];
  save_date = `${selected_date.innerText}, ${selected_month}, ${selected_year}`;
  todo_selected_date.innerHTML = save_date;
  todoListCheck(); //todoList내용 불러오기
  completeTodoListCheck(); //completeTodoList내용 불러오기
}

function saveToDos() {
  //todoList 배열 localstorage에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //배열 그대로는 localstorage에 못들어가므로 문자열로 변환
}

function deleteTodo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); //li과 id가 다른거만 남긴다
  saveToDos();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const todo_list_buttons = document.createElement("span");
  todo_list_buttons.classList.add("todo_list_buttons")
  span.innerText = newTodoObj.text;
  const completeButton = document.createElement("span");
  completeButton.innerText = "✔️";
  completeButton.id = "completeButton";
  const deleteButton = document.createElement("span");
  deleteButton.innerText = "❌";
  deleteButton.id = "deleteButton";
  deleteButton.addEventListener("click", deleteTodo);
  completeButton.addEventListener("click", completeTodo);
  todo_list_buttons.appendChild(completeButton);
  todo_list_buttons.appendChild(deleteButton);
  li.appendChild(span);
  li.appendChild(todo_list_buttons);
  todo_list.appendChild(li);
}
//✔️❌➰
function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todo_input.value;
  todo_input.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    date: save_date,
  };
  toDos.push(newTodoObj);
  saveToDos();
  paintTodo(newTodoObj);
}

todo_form.addEventListener("submit", handleTodoSubmit);

function todoListCheck() {
  //todoList내용 불러오기
  const savedTodos = localStorage.getItem(TODOS_KEY);
  while (todo_list.hasChildNodes()) {
    todo_list.removeChild(todo_list.firstChild);
  }
  //날짜 변경 시 todo_list의 child를 지우고 새로 받아오기위해서
  if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    //문자열로 변환된 값을 다시 배열로
    toDos = parsedTodos;
    const filterParsedTodos = parsedTodos.filter(
      (todo) => todo.date === save_date
    ); //obj의 날짜가 같은거만 리턴
    filterParsedTodos.forEach((element) => {
      paintTodo(element);
    }); //todo_list에 새로운child 생성
  }
}

function completeTodoListCheck() {
  //완료된todolist내용 불러오기
  const completeSavedTodos = localStorage.getItem(COMPLETE_TODOS_KEY);
  while (complete_todo_list.hasChildNodes()) {
    complete_todo_list.removeChild(complete_todo_list.firstChild);
  }
  if (completeSavedTodos !== null) {
    const completeParsedTodos = JSON.parse(completeSavedTodos);
    complete_toDos = completeParsedTodos;
    const completeFilterParsedTodos = completeParsedTodos.filter(
      (completeTodo) => completeTodo.date === save_date
    );
    completeFilterParsedTodos.forEach((element) => {
      completePaintTodo(element);
    });
  }
}

function saveCompleteTodos() {
  localStorage.setItem(COMPLETE_TODOS_KEY, JSON.stringify(complete_toDos));
}

function restoreTodo(event) {
  const li = event.target.parentElement.parentElement;
  toDos.push(
    ...complete_toDos.filter(
      (complete_todo) => complete_todo.id === parseInt(li.id)
    )
  );
  //그냥 push로 하면 배열안에 배열이 들어가서...으로 연결되게 바꿈
  complete_toDos = complete_toDos.filter(
    (complete_todo) => complete_todo.id !== parseInt(li.id)
  );
  saveToDos();
  saveCompleteTodos();
  li.remove();
  todoListCheck();
}

function completeTodo(event) {
  const li = event.target.parentElement.parentElement;
  complete_toDos.push(...toDos.filter((todo) => todo.id === parseInt(li.id))); //...는 리스트 안에 또 리스트가 들어가지않도록
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); //li과 id가 다른거만 남긴다

  saveToDos();
  saveCompleteTodos();
  li.removeChild(li.lastChild);
  const restoreButton = document.createElement("span");
  restoreButton.innerText = "➰";
  restoreButton.id = "restoreButton";
  const deleteButton = document.createElement("span");
  deleteButton.innerText = "❌";
  deleteButton.id = "deleteButton";
  const complete_todo_list_buttons = document.createElement("span");
  complete_todo_list_buttons.classList.add("complete_todo_list_buttons");
  complete_todo_list_buttons.appendChild(restoreButton);
  complete_todo_list_buttons.appendChild(deleteButton);
  li.appendChild(complete_todo_list_buttons);
  complete_todo_list.appendChild(li);

  restoreButton.addEventListener("click", restoreTodo);
  deleteButton.addEventListener("click", completeDeleteTodo);
}

function completePaintTodo(completeNewTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = completeNewTodo.text;
  li.id = completeNewTodo.id;
  const restoreButton = document.createElement("span");
  restoreButton.innerText = "➰";
  restoreButton.id = "restoreButton";
  const deleteButton = document.createElement("span");
  deleteButton.innerText = "❌";
  deleteButton.id = "deleteButton";
  const complete_todo_list_buttons = document.createElement("span");
  complete_todo_list_buttons.classList.add("complete_todo_list_buttons");
  complete_todo_list_buttons.appendChild(restoreButton);
  complete_todo_list_buttons.appendChild(deleteButton);
  li.appendChild(span);
  li.appendChild(complete_todo_list_buttons);
  complete_todo_list.appendChild(li);

  restoreButton.addEventListener("click", restoreTodo);
  deleteButton.addEventListener("click", completeDeleteTodo);
}

function completeDeleteTodo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  //console.log(li.id);
  complete_toDos = complete_toDos.filter((complete_todo) => complete_todo.id !== parseInt(li.id)); //li과 id가 다른거만 남긴다
  saveCompleteTodos();
}