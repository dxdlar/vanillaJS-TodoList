//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos)
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("change", filterTodo)

//Functions

// 할일 추가 버튼 클릭 이벤트 함수
function addTodo(e) {
    //prevent form from sub submitting
    e.preventDefault();
    //할일 DIV 생성
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //LI 생성
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    //로컬 스토리지 추가
    saveLocalTodos(todoInput.value);
    //
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //완료 버튼 생성
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //삭제 버튼 생성
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //리스트에 추가
    todoList.appendChild(todoDiv);
    //리스트 요소 초기화
    todoInput.value = "";
}

// 삭제 버튼 클릭 이벤트 함수
function deleteCheck(e) {
    const item = e.target;
    //요소 지우기
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;