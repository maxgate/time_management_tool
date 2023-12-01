const schedule = document.getElementById("mov");

const createTodosStoragse = () => {
  const item = localStorage.getItem("todos");
  if (!item) {
    localStorage.setItem("todos", JSON.stringify([]));
  }
  
};

schedule.addEventListener("click", () => {
  createTodosStoragse();

  const todos = localStorage.getItem("todos");
  const todoArray = JSON.parse(todos);
  const title = document.getElementById("exampleFormControlInput1").value;
  const note = document.querySelector(".note").value;
  const newTodoArray = [
    ...todoArray,
    { time_manager_message: note, time_manager_title: title },
  ];
  localStorage.setItem("todos", JSON.stringify(newTodoArray));

  window.location.href = "./index.html";
});
